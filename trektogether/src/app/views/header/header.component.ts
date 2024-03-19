import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from 'src/app/controllers/user.service';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  user !: user;
  returnURL = '';
  showMobileMenu = false;
  constructor(private userservice : UserService, private router : Router) { 
    userservice.userObservable.subscribe((newUser)=>{
      this.user = newUser;
    })
  }

  ngOnInit(): void {
  }

  logout(){
    return this.userservice.logout()
  }

  checkScreenWidth() {
    this.showMobileMenu = window.innerWidth < 768; 
  }

  get isAuth(){
    return this.user.token;
  }

  



}
