import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/controllers/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { PasswordMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit{
  
  registerForm!:FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit():void{
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', Validators.required],
      description: ['', Validators.required],
      interests: ['', Validators.required]

    }, {
      validators: PasswordMatchValidator('password','confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }


  get fc(){
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const user: IUserRegister = {
      name: fv.name,
      email: fv.email,
      description: fv.description,
      interests: fv.interests,
      password: fv.password,
      confirmPassword: fv.confirmPassword
    };

    this.userService.register(user).subscribe(_=>{
        this.router.navigateByUrl(this.returnUrl);
      });
  }
}


