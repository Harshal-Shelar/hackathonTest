import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-total',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './order-total.component.html',
  styleUrl: './order-total.component.scss'
})
export class OrderTotalComponent {

  orderTotal : any = 0;
  totalAmount : any = 0;
  tax : any = 540;
  shippingCharges : any = 40;

  constructor(private sharedService : SharedService){}

  ngOnInit(){
    this.sharedService.sendData.subscribe((data:any)=>{
       data.map((price:any)=> { return this.orderTotal = this.orderTotal + parseInt(price?.price)})
    });
    this.totalAmount = this.orderTotal + this.shippingCharges + this.tax
  }
}
