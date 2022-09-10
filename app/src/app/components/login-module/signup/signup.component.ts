import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

export function passwordsMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontmatch: true
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)

  }, { validators: passwordsMatch() })
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private toast: HotToastService
     ) { }

  ngOnInit(): void {
  }

  get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  submit() {
    console.log(this.signupForm.value);
    if (this.signupForm.invalid) {
      return;
    }
    const { name, email, password, confirmPassword } = this.signupForm.value;
    this.auth.signup(name, email, password)
      .pipe(this.toast.observe({
        success: 'You are now a member',
        loading: "loading...",
        error: ({message})=>`${message}`
      }))
      .subscribe(()=>{
        this.router.navigate(['login'])
      })
  }

}
