import {Wallet} from "@Wallet/model/business/Wallet";

export interface Transaction
{
  transaction_id: number;
  type: String;
  amount: number;
  wallet: Wallet;
}
