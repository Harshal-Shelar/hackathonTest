import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToastrModule } from 'ngx-toastr'; 
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedService } from './services/shared.service';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxPaginationModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tokenAuthorization';
  myUUID: any;

  constructor(private sharedService: SharedService, private authService : AuthService, private router : Router) {}

  ngOnInit() {
    this.sharedService.generateUUID();
  }

  ngOnChanges(){
    if(!localStorage.getItem('token') || !sessionStorage.getItem('token')){
      this.router.navigateByUrl('/pageNotFound');
    }
  }

}
