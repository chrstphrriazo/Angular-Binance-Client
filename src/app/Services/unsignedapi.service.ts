import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UnsignedApiService {

  constructor(private http: HttpClient) {

  }

  getPing() {
    return this.http.get(
      'https://localhost:7064/ping'
    );
  }

  getDepth() {
    return this.http.get(
      'https://localhost:7064/depth'
    );
  }

  getTickerPrice() {
    return this.http.get(
      'https://localhost:7064/ticker/price'
    );
  }

}
