import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _router: Router) { }

    newProduct: any;
    errors = {};

  ngOnInit() {
    this.newProduct = {name: "", qty : 0, price: 0 }
  }

  addProduct( ){
    let obs = this._httpService.addProduct(this.newProduct)
    obs.subscribe( data => {
        console.log("Validation errors", data);
        if(data['message'] == "Success"){
            this._router.navigate(['/products']);

        }
        else if(data['message'] == "custom"){
            this.errors = data['data'];
            this.newProduct= { };
            console.log("Custom create Error:",this.errors);
        }

        else{

            this.errors = data['data']['errors'];
            this.newProduct= { };
            console.log("From create Error:",this.errors);

        }



        })

  }


}
