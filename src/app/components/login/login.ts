import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  email: any;
  password: any;
  constructor(private auth: Auth, private router:Router) { }
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res:any) =>{
        this.auth.saveToken(res.access_token);
        this.router.navigate(['/profile']);
      },
      error: (err)=>{
        alert('Invalid')
      }
    })
  }

}
