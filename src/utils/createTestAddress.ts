import Prando from "prando";
import { Address } from "ton";

export function createTestAddress(chain: number, key: string) {
    const random = new Prando(key);
    let ids: number[] = [];
    for (let i = 0; i < 32; i++) {
        ids.push(random.nextInt(0, 255));
    }
    return new Address(chain, Buffer.from(ids));
}