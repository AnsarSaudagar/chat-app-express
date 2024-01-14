import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm !: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]) ,
      'lastName': new FormControl(null) ,
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() { 
    console.log(this.signupForm.value);
    
  }
}
