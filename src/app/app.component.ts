import { Component, OnInit } from '@angular/core';
import { ServerService } from './services/api/server.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private serverService: ServerService
  ) {}

  ngOnInit(){
    this.loadProducts();
  }

  async loadProducts(){
    let res = await this.serverService.getProductList();
    console.log(res)
  }
}
