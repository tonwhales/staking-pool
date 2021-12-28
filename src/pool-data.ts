import { Address, Cell } from "ton";
import { BN } from 'bn.js';

export function createPoolData(owner: Address, seed: number) {
    const res = new Cell();
    res.bits.writeUint(0, 32);
    res.bits.writeAddress(owner);
    res.bits.writeUint(seed, 32);
    res.bits.writeBit(false);
    res.bits.writeCoins(new BN(0));
    res.bits.writeCoins(new BN(0));
    res.bits.writeBit(false);
    return res;
}