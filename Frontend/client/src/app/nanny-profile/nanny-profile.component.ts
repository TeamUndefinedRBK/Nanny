import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nanny-profile',
  templateUrl: './nanny-profile.component.html',
  styleUrls: ['./nanny-profile.component.css'],
})
export class NannyProfileComponent {
  // constructor() {}
  isReadOnly = true;
  // nanny = {
  //   FirstName: '3li',
  //   LastName: '3loulou',
  //   Age: 59,
  //   Email: '3li.3loulou@3alela.3lol',
  //   Region: 'sidi 3li',
  //   PhoneNumber: 333333333,
  //   About: 'aboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutabout',
  // };

  readAndChange() {
    this.isReadOnly = !this.isReadOnly;
    console.log(this.isReadOnly);
  }
}
