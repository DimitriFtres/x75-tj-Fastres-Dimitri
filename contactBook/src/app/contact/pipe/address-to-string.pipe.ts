import {Pipe, PipeTransform} from '@angular/core';
import {Address} from "../address/Address";

@Pipe({
  name: 'addressToString'
})
export class AddressToStringPipe implements PipeTransform {

  transform(address: Address): String {
    return address.number + ', ' + address.road + ' <br/>'
      + address.cp + ', ' + address.town + '< br/>'
      + address.country;
  }

}
