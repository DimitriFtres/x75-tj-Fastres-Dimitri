import {Wallet} from "../business/Wallet";
// @ts-ignore
import {Dto} from "@Common/Dto";

export interface TransactionDto extends Dto
{
  transaction_id: number;
  type: String;
  amount: number;
  wallet: Wallet;
}
