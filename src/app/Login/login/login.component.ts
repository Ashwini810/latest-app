import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  // imports: [ReactiveFormsModule], // Removed as it is not valid in @Component
  imports: [ReactiveFormsModule,CommonModule],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
   public loginForm!:FormGroup;
  constructor( private formBuilder:FormBuilder){
    this.loginForm = this.formBuilder.group({
      userName: this.formBuilder.control('',[Validators.required]),
      passWord:new FormControl('',[Validators.required])
    })
  }

  ngOnInit() {
 
  }

  onsubmit(){
alert("Form Submitted")
     this.loginForm.reset();
  }

}
