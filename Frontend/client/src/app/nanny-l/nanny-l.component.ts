import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {nannyss} from "../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nanny-l',
  templateUrl: './nanny-l.component.html',
  styleUrls: ['./nanny-l.component.css'],
  providers: []
})
export class NannyLComponent implements OnInit {
nannys: nannyss[] = []

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.nannys=[
      
        { FirstName: 'rania',
        LastName: 'doe',
        Region: 'sfax',
        image: 'https://media.senscritique.com/media/000017453094/150_200/Sarra_Hannachi.jpg',
        Age: 22,
        Phonenumber: 23732456,
        Email: 'raniadoe@gmail.com',
        About:'i love kids ',
        },
        {
        FirstName: 'sarra',
        LastName: 'doe',
        Region: 'sousse',
        image: 'https://i.pinimg.com/474x/8d/35/07/8d35077e43cff3cafe7843926c9567d8.jpg',
        Age: 32,
        Phonenumber: 23889498,
        Email: 'sarradoe@gmail.com',
        About:'i love kids too',
        },
        {
          FirstName: 'salma',
          LastName: 'doe',
          Region: 'gafsa',
          image: 'https://lh3.googleusercontent.com/proxy/fXPkTnC1xx0tr7_UwrGcAU_nAlQLjg3mxOPO5-gXWqbWYlEFI4XsllHG0-G_mUGOUGlFMB_pAWbeyE6RB6phWK3HbaYi9sInRAzJiBYWCtUJLrrlHvzfqNY40TFoFEpKMCqSbyADfA',
          Age: 32,
          Phonenumber: 23889498,
          Email: 'sarradoe@gmail.com',
          About:'i love kids too',
          },
          {
            FirstName: 'maha',
            LastName: 'doe',
            Region: 'mednine',
            image: 'https://www.jeuneafrique.com/medias/2012/03/13/012032012175333000000P.jpg',
            Age: 32,
            Phonenumber: 23889498,
            Email: 'sarradoe@gmail.com',
            About:'i love kids too',
            },
            {
              FirstName: 'cherine',
              LastName: 'doe',
              Region: 'gabes',
              image: 'https://www.baya.tn/wp-content/uploads/2014/02/mis1.png',
              Age: 32,
              Phonenumber: 23889498,
              Email: 'sarradoe@gmail.com',
              About:'i love kids too',
              },
              {
                FirstName: 'na3ima',
                LastName: 'doe',
                Region: 'ariana',
                image: 'https://i.pinimg.com/originals/c5/1d/6b/c51d6b511edd41a278667b951baedcad.jpg',
                Age: 32,
                Phonenumber: 23889498,
                Email: 'sarradoe@gmail.com',
                About:'i love kids too',
                },
                {
                  FirstName: 'fathia',
                  LastName: 'doe',
                  Region: 'tunis',
                  image: 'https://i0.wp.com/arjazia.com/wp-content/uploads/2020/12/t-shirt-tunisie-femme-made-in-tunisia.jpg?fit=800%2C800&ssl=1&resize=400%2C400',
                  Age: 32,
                  Phonenumber: 23889498,
                  Email: 'sarradoe@gmail.com',
                  About:'i love kids too',
                  },
                  {
                    FirstName: 'maha',
                    LastName: 'doe',
                    Region: 'nabeul',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TPOLm2ayfQIuXBM9g51x72SCO0ul5NbDcA&usqp=CAU',
                    Age: 32,
                    Phonenumber: 23889498,
                    Email: 'sarradoe@gmail.com',
                    About:'i love kids too',
                    }
        
        
    ]
   
  }
//this.productService.getAllProducts(8).subscribe((prods: serverResponse ) => {
    //   this.products = prods.products;
    //   console.log(this.products);
    // });
  // selectProduct(id: Number) {
  //   this.router.navigate(['/product', id]).then();
  // }
}
