import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {

  ngOnInit() {
    this.getProfile();
  }

  user: any;
  constructor(private auth: Auth) { }

  getProfile() {
    return this.auth.getProfile().subscribe({
      next: (res) => {
        console.log(res)
        this.user = res;
      },
      error: () => {
        alert("sorry")
      }
    }
    )

  }
}
