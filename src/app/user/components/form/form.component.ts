import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.userFormGroup = this.fb.group({
      email: [''],
      name: [''],
      bio: [''],
      active: ['']
    })
  }

  ngOnInit(): void {
  }
  

 

}
