import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedOnUsername;
  loggedOnEmail;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let user = this.authService.getLoggedOnUser();
    this.loggedOnUsername = user.username;
    this.loggedOnEmail = user.email;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
