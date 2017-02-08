import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loading = false;
  model: any = {};

  constructor(private router: Router, private users:UserService) { }

  register(){
    this.loading = true;
    this.users.register(this.model).subscribe(
      data => this.router.navigate(['/login']), 
      err => {
        console.log(err);
        this.loading = false;
      });
  }

}
