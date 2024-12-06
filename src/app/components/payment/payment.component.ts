import { Component } from '@angular/core';
import { OrderTotalComponent } from '../../shared/order-total/order-total.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [OrderTotalComponent, ReactiveFormsModule, RouterLink, BreadcrumbComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  paymentForm !: FormGroup
  opencardInfo : boolean = false;
  isSubmitted : boolean = false;
  breadcrumb : any = []

  constructor(private fb : FormBuilder, private sharedService : SharedService, private router :  Router){}

  ngOnInit(){
    this.paymentForm = this.fb.group({
      card : [''],
      date : [''],
      cvv : [''],
    });

    this.breadcrumb = [
      {url : '/list', name : 'User List'},
      {url : '/cart', name : 'Cart'},
      {url : '/userForm', name : 'Shipping Form'},
      {url : '/payment', name : 'Payment'},
    ]
  }

  radioCheck(e:any){
    if(e.target.checked == true){
      this.paymentForm.get('card')?.setValidators([Validators.required, Validators.pattern(''), Validators.minLength(12), Validators.maxLength(12)])
      this.paymentForm.get('date')?.setValidators([Validators.required, Validators.pattern('')])
      this.paymentForm.get('cvv')?.setValidators([Validators.required, Validators.pattern(''), Validators.minLength(3)])
    }else{
      this.paymentForm.get('card')?.clearValidators()
      this.paymentForm.get('date')?.clearValidators()
      this.paymentForm.get('cvv')?.clearValidators()
    }
  }

  get f() {
    return this.paymentForm.controls;
  }

  navigateToFinal(){
    this.isSubmitted = true;

    if(this.paymentForm.valid){
      this.router.navigateByUrl('/orderPlaced')
    }
  }

  navigateToFinalCOD(){
    this.router.navigateByUrl('/orderPlaced')
  }
}
