import fs from 'fs';
import { Address, Cell, CommentMessage, InternalMessage, toNano } from 'ton';
import { SmartContract } from "ton-contract-executor";
import { createPoolData } from './pool-data';
import { createTestAddress } from './utils/createTestAddress';

const source = Cell.fromBoc(fs.readFileSync(__dirname + '/contract/main.cell'))[0];
const owner = createTestAddress(0, 'owner');

describe('pool-stakes', () => {
    it('should accept stakes', async () => {
        const contract = await SmartContract.fromCell(source, createPoolData(owner, 0));
        let res = await contract.sendInternalMessage(new InternalMessage({
            to: owner,
            value: toNano(1),
            bounce: false,
            bounced: false,
            body: new CommentMessage('stake')
        }));
        console.warn(res);
    });
});