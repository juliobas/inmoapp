import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../services/auth/auth-user.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {

  constructor(
    public auth: AuthUserService
  ) { }

  ngOnInit() {
  }

}
