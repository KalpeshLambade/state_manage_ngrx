import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}

  getProductList() {
    return new Promise<any>((resolve, reject) => {
      const url = environment.server + 'carts';
      this.http.get(url).subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          resolve(err);
        },
      });
    });
  }
}
