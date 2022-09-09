import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {  Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required])
  })

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  submit(){
    if(this.loginForm.invalid){
      console.log("wrong creds");
      
      return;
    }


    const{email,password}=this.loginForm.value;
    
    console.log(email);
    this.authService.login(email,password).subscribe(() =>{
      this.router.navigate(['home']);
    });

    
  }
}
