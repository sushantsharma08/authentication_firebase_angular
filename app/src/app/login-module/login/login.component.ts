import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
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
    if(this.loginForm.valid){
      return;
    }

    const{email,password}=this.loginForm.value;

    this.authService.login(email,password).subscribe(() =>{
      this.router.navigate(['/home']);
    });

  }

}