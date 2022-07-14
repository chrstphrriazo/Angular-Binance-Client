import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SignedApiService } from "../../Services/signedapi.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  public accountform: FormGroup;
  public accountData: any;

  constructor(
    private accountservice: SignedApiService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    /*    this.depthform = this.formBuilder.group({
          symbol: [''],
        })*/
    this.accountservice.getAccount().subscribe((data: any) => {
      this.accountData = data;
      console.log('lol')
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.accountData))
    })
  }
}
