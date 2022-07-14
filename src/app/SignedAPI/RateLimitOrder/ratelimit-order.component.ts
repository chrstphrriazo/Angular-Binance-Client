import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SignedApiService } from "../../Services/signedapi.service";

@Component({
  selector: 'app-ratelimit-order',
  templateUrl: './ratelimit-order.component.html',
  styleUrls: ['./ratelimit-order.component.css']
})

export class RateLimitOrderComponent implements OnInit {
  public ratelimitForm: FormGroup;
  public ratelimitData: any;

  constructor(
    private ratelimitservice: SignedApiService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    /*    this.depthform = this.formBuilder.group({
          symbol: [''],
        })*/
    this.ratelimitservice.getRateLimitOrder().subscribe((data: any) => {
      this.ratelimitData = data;
      console.log('lol')
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.ratelimitData))
    })
  }
}
