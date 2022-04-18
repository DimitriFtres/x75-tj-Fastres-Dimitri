import {Wallet} from "../business/Wallet";
// @ts-ignore
import {Payload} from "@Common/Payload";

export interface TransactionUpdatePayload extends Payload
{
  transaction_id: number;
  type: String;
  amount: number;
  wallet: Wallet;
}
