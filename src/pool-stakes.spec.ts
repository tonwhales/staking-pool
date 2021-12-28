import fs from 'fs';
import { Address, CommentMessage, InternalMessage, toNano } from 'ton';
import { SmartContract } from "ton-contract-executor";
import { createPoolData } from './pool-data';
import { createTestAddress } from './utils/createTestAddress';

const source = fs.readFileSync(__dirname + '/contract/main-amalgama.fc', 'utf-8');
const owner = createTestAddress(0, 'owner');

describe('pool-stakes', () => {
    it('should accept stakes', async () => {
        const contract = await SmartContract.fromFuncSource(source, createPoolData(owner, 0));
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