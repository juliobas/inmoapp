import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from '../../services/auth/auth-user.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(
    private ngZone: NgZone,
    private router: Router,
    public auth: AuthUserService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.ngZone
              .run(() => this.router.navigate(['']))
              .then();
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
