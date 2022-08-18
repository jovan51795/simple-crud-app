import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserAuth } from '../model/auth-model';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toast: ToastrService) {
    this.registerFormGroup = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  register = (): any => {
    const userData = this.registerFormGroup.getRawValue() as UserAuth
    if(!userData.name) {
     return this.toast.error('Name is required!')
    }
    this.authService.register(userData).subscribe()
  }

}
