import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-listing',
  imports: [CommonModule],
  templateUrl: './user-listing.html',
  styleUrl: './user-listing.scss',
})
export class UserListing implements OnInit{
  constructor(private auth: Auth) {

  }
  ngOnInit(): void {
   
    this.getAllUsers();
  }

  users: any[] = []

  getAllUsers() {
    this.auth.getUsers().subscribe({
      next: (res:any)=>{
        this.users = res;

        // this.users.map((user)=>{
        //   console.log(user.name)
        // })

        console.log(res);
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
}
