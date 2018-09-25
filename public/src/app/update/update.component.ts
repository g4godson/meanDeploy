import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

    productId : any;
    errors: any;
  product: any;

  ngOnInit() {

    this._route.params.subscribe((params: Params) =>{ console.log("Product ID", params['id']);
       this.productId = params['id']})
        this.product = {name: "", qty:0, price:0}
       this.getOneProduct();
       this.errors = {};
  }

  getOneProduct(){
    let obs = this._httpService.getOneProduct(this.productId);
    obs.subscribe( data => {

        if(data['message'] == "Success"){
            this.product = data['data'];

        console.log("Fetched Product",this.product);
        }
        else{
            this._router.navigate(['/products']);
        }


    })
    }

    editProduct(){
        let obs = this._httpService.updateProduct(this.productId, this.product);
        obs.subscribe( data => {
            if(data['message'] == "Success"){
                this._router.navigate(['/products']);

            }
            else if(data['message'] == "custom"){
                this.errors = data['data'];
                this.product= {};
            }

            else{

                this.errors = data['data']['errors'];
                this.product= {};
                console.log("From create Error:",this.errors);

            }

    })

    }
    reset(){
        this.getOneProduct()

    }


}