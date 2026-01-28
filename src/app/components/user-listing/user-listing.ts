import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-user-listing',
  imports: [CommonModule, FormsModule, RouterLink, RouterModule],
  templateUrl: './user-listing.html',
  styleUrl: './user-listing.scss',
})
export class UserListing implements OnInit {
  constructor(private auth: Auth) {

  }
  ngOnInit(): void {

    this.getAllUsers();
  }
  selectedUser: any = null;
  users: any[] = []

  getAllUsers() {
    this.auth.getUsers().subscribe({
      next: (res: any) => {
        this.users = res;

        // this.users.map((user)=>{
        //   console.log(user.name)
        // })

        console.log(res);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  // Edit User
  submitUpdate() {
    const { id, name, email, role } = this.selectedUser;

    this.auth.updateUser(id, { name, email, role }).subscribe({
      next: (res) => {
        alert('User updated successfully');

        // update UI without refetch
        const index = this.users.findIndex(u => u.id === id);
        this.users[index] = res;

        this.selectedUser = null;
      },
      error: (err) => console.error(err)
    });
  }
  editUser(user: any) {
    // clone user so table data doesn't change immediately
    this.selectedUser = { ...user };
  }
  cancelEdit() {
    this.selectedUser = null;
  }
  
  deleteUser(id:number){
    this.auth.deleteUser(id).subscribe({
      next: (res)=>{
        this.users = this.users.filter(user => user.id !==id);
        alert("user deleted successfully")
      },
      error: (err)=>{
        alert("Deleted")
      }
    })
  }
}
