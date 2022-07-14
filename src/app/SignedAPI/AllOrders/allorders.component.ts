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

  constructor(
    private allorderservice: SignedApiService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    /*    this.depthform = this.formBuilder.group({
          symbol: [''],
        })*/
    this.allorderservice.getAllOrders().subscribe((data: any) => {
      this.allorderData = data;
      console.log('lol')
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.allorderData))
    })
  }
}
