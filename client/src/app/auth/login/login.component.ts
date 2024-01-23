import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(
        {
          next: (value: any) => {
            console.log("Succesfully Logged In");
            console.log(value.token);
  
            this.authService.setSession(value.token, this.loginForm.value.email);
          },
          error(err) {
            console.log("error");
            console.log(err);
  
          },
        }
      )
    }
  }

}
