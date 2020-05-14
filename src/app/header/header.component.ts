import { Component, OnInit } from '@angular/core';

import { SecurityService } from '@services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public securityService: SecurityService) { }

  ngOnInit(): void {
  }

  login() {
    this.securityService.loginGoogle();
  }

  logout() {
    this.securityService.logout();
  }
}
