import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router, 
              private authService: AuthService) { 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit(){
    this.authService.logout();
  }

  login(username, password){
    console.log(`logging in with: ${username} \ ${password}`);
    this.authService.login(username, password).subscribe(
      r => {
        this.router.navigate([this.returnUrl]);
      }, 
      err =>{
        this.loading = false;
        console.log(err);
      });
  }

}
