import {Wallet} from "../business/Wallet";
import {Payload} from "@Common/Payload";

export interface transactionUpdatePayload extends Payload
{
  transaction_id: number;
  type: String;
  amount: number;
  wallet: Wallet;
}
