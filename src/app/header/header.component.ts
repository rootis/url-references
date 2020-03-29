import { Component, OnInit } from '@angular/core';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.loginGoogle();
  }

  logout() {
    this.auth.logout();
  }
}
