import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nanny-form',
  templateUrl: './nanny-form.component.html',
  styleUrls: ['./nanny-form.component.css'],
})
export class NannyFormComponent {
  log(test: string) {
    console.log(test);
  }
}
