import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { RouterLink } from '@angular/router';
import { OrderTotalComponent } from '../../shared/order-total/order-total.component';
import { CurrencyPipe } from '@angular/common';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, OrderTotalComponent, CurrencyPipe, BreadcrumbComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  productArray : any = [];
  newUUID: any;
  breadcrumb : any = []

  constructor(private sharedService : SharedService){

  }

  ngOnInit(){
    this.sharedService.sendData.subscribe((data:any)=>{
      this.productArray = data
    });

    this.breadcrumb = [
      {url : '/list', name : 'User List'},
      {url : '/cart', name : 'Cart'},
    ]
    
  }

  removeFromCart(item:any, index:any){
    this.productArray.splice(index, 1)
  }
}
