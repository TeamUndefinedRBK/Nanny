import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {productService} from '../services/product.service'

@Component({
  selector: 'app-nanny-l',
  templateUrl: './nanny-l.component.html',
  styleUrls: ['./nanny-l.component.css']
})
export class NannyLComponent implements OnInit {

  constructor(private productService: productService) { }

  ngOnInit(): void {
  }

}
