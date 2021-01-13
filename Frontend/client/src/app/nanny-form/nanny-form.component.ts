import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nanny-form',
  templateUrl: './nanny-form.component.html',
  styleUrls: ['./nanny-form.component.css'],
})
export class NannyFormComponent {
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  region: string;
  phoneNumber: number;
  about: string;
  selectedFile = null;

  constructor() {
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.age;
    this.region = '';
    this.phoneNumber;
    this.about = '';
  }
  constructor(private http: HttpClient) {}
  // log(test: string) {
  //   console.log(test);
  // }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    this.http.post('');
  }
}
