import { Component, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Login } from "./components/login/login";
import { Profile } from "./components/profile/profile";
import { Auth } from './services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, Login, Profile,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('simple-auth-app');

  constructor(private auth:Auth, private router:Router){

  }

  logOut(){
    this.auth.logout();
    this.router.navigate(['/login'])
    console.log("Logged out")
  }


  isLoggedIn(){
    return this.auth.isLoggedIn();
  }
}
