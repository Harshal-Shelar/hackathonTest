import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';

export const routes: Routes = [
    {path : '', redirectTo : 'list', pathMatch : 'full'},
    {path : 'list', component : ProductListComponent},
    {path : 'cart', component : CartComponent},
    {path : 'pageNotFound', component : PageNotFoundComponent},
    {path : 'userForm', component : UserFormComponent},
    {path : 'payment', component : PaymentComponent},
    {path : 'orderPlaced', component : OrderPlacedComponent},
];
