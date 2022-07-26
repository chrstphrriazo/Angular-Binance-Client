import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SignedApiService } from "../../Services/signedapi.service";

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})

export class AllOrdersComponent implements OnInit {
  public allorderform: FormGroup;
  public allorderData: any;
  public allorderDataDb: any;
  public body: any;
  allorderinterface: AllOrderInterface

  printData() {
    console.log("allorderData length outisde ", this.allorderData?.length)
  }

  constructor(
    private allorderservice: SignedApiService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {

    this.allorderservice.getAllOrders().subscribe((data: any) => {
      this.allorderinterface = data;
/*      this.allorderinterface.savedStatus = false;*/
      console.log('lol')
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.allorderinterface))
      console.log("Status ", this.allorderinterface?.[0].status)
      this.allorderData = this.allorderinterface
      console.log("allorderData length ", this.allorderData.length)
      for (let i = 0; i < this.allorderData?.length; i++) {
        for (let j = 0; j < this.allorderDataDb?.length; j++) {
          console.log
          if (this.allorderDataDb?.[j].clientOrderId == this.allorderData?.[i].clientOrderId) {
            this.allorderinterface[i].savedStatus = true
          }
        }
      }
      console.log("allorderData length DBB", this.allorderDataDb.length)
    })

    this.allorderservice.getAllOrdersDb().subscribe((data: any) => {
      this.allorderDataDb = data;
      console.log("data db ", this.allorderDataDb)
      console.log("allorderData length outisde ", this.allorderData?.length)
    })
  }



  saveData(i) {
    this.body = {
      "clientOrderId": this.allorderData?.[i].clientOrderId,
      "cummulativeQuoteQty": this.allorderData?.[i].cummulativeQuoteQty,
/*      "orderId": this.allorderData?.[i].orderId,*/
      "origQty": this.allorderData?.[i].origQty,
      "price": this.allorderData?.[i].price,
      "side": this.allorderData?.[i].side,
      "status": this.allorderData?.[i].status,
      "stopPrice": this.allorderData?.[i].stopPrice,
      "symbol": this.allorderData?.[i].symbol,
/*      "time": this.allorderData?.[i].time,*/
      "timeInForce": this.allorderData?.[i].timeInForce,
      "type": this.allorderData?.[i].type,
      "savedStatus": true,
    }
    console.log("data works", i)
    console.log("orderData", this.allorderData?.[i].status)
    this.allorderservice.postAPIHeroes(this.body).subscribe((data: any) => {
      console.log('dataHero ', data)
    })
  }
}

export interface AllOrderInterface {
  clientOrderId: string;
  cummulativeQuoteQty: string;
  orderId: number;
  origQty: string;
  price: string;
  side: string;
  status: string;
  stopPrice: string;
  symbol: string;
  time: number;
  timeInForce: string;
  type: string;
  savedStatus: boolean;
}
