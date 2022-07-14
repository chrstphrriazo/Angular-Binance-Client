import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UnsignedApiService } from "../../Services/unsignedapi.service";

@Component({
  selector: 'app-ticker-price',
  templateUrl: './tickerprice.component.html',
  styleUrls: ['./tickerprice.component.css']
})

export class TickerPriceComponent implements OnInit {
  public tickerpriceform: FormGroup;
  public tickerpriceSymbol: any;
  public tickerpricePrice: any;

  constructor(
    private tickerpriceservice: UnsignedApiService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    /*    this.depthform = this.formBuilder.group({
          symbol: [''],
        })*/
    this.tickerpriceservice.getTickerPrice().subscribe((data: any) => {
      this.tickerpriceSymbol = (data);
      this.tickerpricePrice = data.price;
      console.log()
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.tickerpriceSymbol))
      console.log('orderbookDataa', (this.tickerpricePrice))
    })
  }
}
