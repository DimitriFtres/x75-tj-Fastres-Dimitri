import {Wallet} from "@Wallet/model/business/Wallet";
import {Dto} from "@Common/Dto";

export interface TransactionDto extends Dto
{
  transaction_id: number;
  type: String;
  amount: number;
  wallet: Wallet;
}
