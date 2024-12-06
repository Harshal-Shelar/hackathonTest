import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  hideHeader: boolean = false;

  constructor(private router : Router){}

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/pageNotFound');
    this.hideHeader = true;
  }
}
