import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ CurrencyPipe, NgxPaginationModule, NgClass, BreadcrumbComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  prodductList !: any[];
  productArray : any = [];
  cartCount : number = 0;
  pages!:number;
  page = 1;
  pageSize = 5;
  response = '';
  breadcrumb:any [] = [];
  isAddedToCart: boolean = false;

  constructor(
    private apiService : ApiService, 
    private sharedSevice : SharedService, 
    private router : Router,
    private http : HttpClient
  ){}

  ngOnInit(){

    this.apiService.getData().subscribe((data:any)=>{
      this.prodductList = data;
    });

    this.breadcrumb = [
      {url : '/list', name : 'User List'}
    ]

  }


  addToCartBtn(product:any) {
    product.inCart = !product?.inCart
    this.isAddedToCart = !this.isAddedToCart;
  }

  addToCart(item:any){
    this.productArray.push(item);
    this.cartCount++;
    this.sharedSevice.sendToCart(this.productArray)
  }

  handlePageChange(e :any){
    this.page = e;
  }

  goTocart(){
    if(this.cartCount > 0){
      this.router.navigateByUrl('/cart')
    }
  }

  removeToken(){
    
  }
}
