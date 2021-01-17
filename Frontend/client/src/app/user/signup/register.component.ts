import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  onSubmit(data: any) {
    this.http.post('http://localhost:5000/Register', data).subscribe((res) => {
      console.warn('res', res);
    });
    console.warn(data);
  }

  constructor(private http: HttpClient) {}
  ngOnInit() {}
  url = './assets/';
  log(test: string) {
    console.log(test);
  }

  

  // onSubmit(formData) {
  //   if(formData.valid) {
  //     console.log(formData.value);
  //     this.af.auth.createUser({
  //       email: formData.value.email,
  //       password: formData.value.password
  //     }).then(
  //       (success) => {
  //       console.log(success);
  //       this.router.navigate(['/login'])
  //     }).catch(
  //       (err) => {
  //       console.log(err);
  //       this.error = err;
  //     })
  //   }
  }


