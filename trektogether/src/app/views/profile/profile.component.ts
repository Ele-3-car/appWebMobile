import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/controllers/user.service';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user !: user;
  username = "";
  returnURL= '';
  constructor(private userService : UserService, private router : Router) {}

  ngOnInit(): void {
    this.userService.userObservable.subscribe(user => {
      this.user = user;
    });
  }

  


}

