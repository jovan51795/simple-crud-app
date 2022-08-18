import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import {FormComponent} from './components/form/form.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
  ],

  providers: [
    FormBuilder,
  ]
})
export class UserModule { }
