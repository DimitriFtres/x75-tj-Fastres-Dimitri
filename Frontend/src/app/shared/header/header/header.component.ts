import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../security/service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe();
  }

  logout(){
    this.authService.logout();
  }

  signin()
  {
    this.authService.navigation.navigateToUnsecure();
  }

  signup(){
    this.authService.navigation.navigate('signup');
  }
}
