import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/controllers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  isSubmitted = false;
  returnURL = '';
  constructor(private formBuilder: FormBuilder, private userService: UserService, 
    private activatedRoute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [, Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    this.returnURL = this.activatedRoute.snapshot.queryParams.returnURL;
  }

  

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }else{
      this.userService.login({email: this.fc.username.value, 
        password: this.fc.password.value}).subscribe(()=>{
          this.router.navigateByUrl(this.returnURL);
        });
    }
  }
}
