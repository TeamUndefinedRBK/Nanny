import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  url = './assets/';
  log(test: string) {
  }


  onSubmit(data: any) {
    this.http.post('http://localhost:5000/login', data).subscribe((res) => {
      console.warn('res', res);
      
    });
  
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
