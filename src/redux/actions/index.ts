import { ASSETS } from "../constants";

export function fetchTransactions(payload: string) : object {
console.log("Set Assets", payload)
return { type: ASSETS, payload };
}

