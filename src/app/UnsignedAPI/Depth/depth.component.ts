import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UnsignedApiService } from "../../Services/unsignedapi.service";

@Component({
  selector: 'app-depth',
  templateUrl: './depth.component.html',
  styleUrls: ['./depth.component.css']
})

export class DepthComponent implements OnInit {

  public depthform: FormGroup;
  public depthData: any;

  constructor(
    private depthservice: UnsignedApiService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
/*    this.depthform = this.formBuilder.group({
      symbol: [''],
    })*/
      this.depthservice.getDepth().subscribe((data: any) => {
      this.depthData = data;
      console.log()
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.depthData))
    })
  }

/*  sendDepth() {
    this.depthservice.getDepth().subscribe((data: any) => {
      this.depthData = data;
      console.log()
      console.log('orderbookDataax', (data))
      console.log('orderbookDataa', (this.depthData))
    })
  }*/
}
