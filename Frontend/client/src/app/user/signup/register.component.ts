import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  

  ngOnInit() {
    
  }
  state: string = '';
  error: any;

  constructor(private router: Router) {

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


