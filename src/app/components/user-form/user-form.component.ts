import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OrderTotalComponent } from '../../shared/order-total/order-total.component';
import { Router, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    OrderTotalComponent,
    RouterLink,
    BreadcrumbComponent,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  updateForm!: FormGroup;
  isSubmitted: boolean = false;
  breadcrumb: any = [];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      pincode: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.maxLength(6),
          Validators.minLength(6),
        ],
      ],
      address: ['', [Validators.required]],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    });

    this.breadcrumb = [
      { url: '/list', name: 'User List' },
      { url: '/cart', name: 'Cart' },
      { url: '/userForm', name: 'Shipping Form' },
    ];
  }

  submitForm() {
    this.isSubmitted = true;
    console.log(this.updateForm.controls);

    this.updateForm.markAllAsTouched();

    if (this.updateForm.valid) {

      this.router.navigateByUrl('/payment');
    }
  }

  get f() {
    return this.updateForm.controls;
  }
}
