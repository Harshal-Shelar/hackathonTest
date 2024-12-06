import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private sharedService : SharedService,
    private authService : AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      
      let newData = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
        token : this.sharedService.generateUUID()
      };


      this.apiService.addDataToJson(newData).subscribe((response:any) => {
        console.log('Data added successfully:', response);
        this.router.navigateByUrl('/list');
        
        this.authService.setItem('token',response?.token)
      });
    }
  }

  get f() {
    return this.loginForm.controls;
  }
}
