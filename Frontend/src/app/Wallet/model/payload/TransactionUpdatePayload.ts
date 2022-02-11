import {Wallet} from "@Wallet/model/business/Wallet";

export interface transactionUpdatePayload
{
  transaction_id: number;
  type: String;
  amount: number;
  wallet: Wallet;
}
