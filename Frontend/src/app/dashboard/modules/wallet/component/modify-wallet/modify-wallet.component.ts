import { Component, OnInit } from '@angular/core';
import {EmployeeUpdatePayload} from "@org-empl/model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Wallet, WalletUpdatePayload} from "@wallet/model";
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "@wallet/service/wallet.service";
import {EmployeeService} from "@org-empl/service/employee.service";
import {OrganizationService} from "@org-empl/service/organization.service";

@Component({
  selector: 'app-modify-wallet',
  templateUrl: './modify-wallet.component.html',
  styleUrls: ['./modify-wallet.component.scss']
})
export class ModifyWalletComponent implements OnInit {

  wallet!: Wallet;

  formwallet: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    actif : new FormControl('', []),
    type : new FormControl('', []),
    employee : new FormControl('', []),
    organization : new FormControl('', []),
  });

  constructor(public route: ActivatedRoute,
              public walletService: WalletService,
              public employeeService: EmployeeService,
              public organizationService: OrganizationService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.organizationService.getList().subscribe();
    this.employeeService.getList().subscribe();
    if(id != null)
      this.walletService.getDetail(id).subscribe(e => {
        this.wallet = e;
        this.formwallet.setValue({
          name : e.name,
          description : e.description,
          actif : e.actif,
          type : e.type,
          employee : e.employee.employee_id,
          organization : e.organization.organization_id
        })
      });
  }
  submit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null)
    {
      let update = {
        name : this.formwallet.value.name,
        description : this.formwallet.value.description,
        actif : this.formwallet.value.actif,
        type : this.formwallet.value.type,
        employee : this.formwallet.value.employee,
        organization : this.formwallet.value.organization
      } as WalletUpdatePayload
      this.walletService.update(update).subscribe();
    }

  }

}
