import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UnsignedApiService } from "../../Services/unsignedapi.service";

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})

export class PingComponent implements OnInit {
  public pingform: FormGroup;
  public pingData: any;
  public testData: any = false;

  constructor(
    private pingservice: UnsignedApiService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.pingservice.getPing().subscribe((data: any) => {
      if (!Object.keys(data).length) {
        this.testData = true;
      }
      this.pingData = data;
      console.log(this.testData)
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.pingData))
    })
  }
}
