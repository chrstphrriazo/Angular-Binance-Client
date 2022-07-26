import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SignedApiService {

  constructor(private http: HttpClient) {

  }

  getAccount() {
    return this.http.get(
      'https://localhost:7064/myaccount'
    );
  }

  getAllOrders() {
    return this.http.get(
      'https://localhost:7064/allorders'
    );
  }

  getAllOrdersDb() {
    return this.http.get(
      'https://localhost:7064/allorders/db'
    );
  }

  getRateLimitOrder() {
    return this.http.get(
      'https://localhost:7064/rateLimit/order'
    );

  }

  postAPIHeroes(body) {
    return this.http.post<any>(
      "https://localhost:7064/allorders", body
    );
  }
}
