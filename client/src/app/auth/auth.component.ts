import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatIconModule, RouterOutlet, HttpClientModule],
  providers: [AuthService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  goToSignup(){
    this.router.navigate(['/auth/signup']);
  }
  goToLogin(){
    this.router.navigate(['/auth/login']);

  }
}
