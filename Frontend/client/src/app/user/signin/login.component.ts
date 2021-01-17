import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private router : Router) { }

  ngOnInit() {
  }
  onLogin(loginForm: NgForm) {

  }

  // OnSubmit(email:any, Password:any){
  //    this.userService.userAuthentication(email,Password).subscribe((data : any)=>{
  //     localStorage.setItem('userToken',data.access_token);
  //     this.router.navigate(['/home']);
  //   },
  //   (err : HttpErrorResponse)=>{
  //     this.isLoginError = true;
  //   });
  // }

}
