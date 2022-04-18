import {Wallet} from "../business/Wallet";
// @ts-ignore
import {Payload} from "@Common/Payload";

export interface TransactionAddPayload extends Payload
{
  transaction_id: number;
  type: String;
  amount: number;
  wallet: Wallet;
}
