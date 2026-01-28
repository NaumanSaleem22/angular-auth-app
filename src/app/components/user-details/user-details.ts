import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails implements OnInit {

  user: any;
  userId!: number;

  constructor(private auth: Auth, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUser();
  }

  getUser() {
    this.auth.getUserById(this.userId).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
