import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {

  constructor(private auth:Auth, private router:Router){

  }

  name:any;
  email:any;
  password:any;
  avatar:any;


  createUser(){
    this.auth.createUser(this.name,this.email,this.password,this.avatar).subscribe({
      next: (res)=>{
        console.log(res);
        this.router.navigate(['/user-listing'])
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
}
