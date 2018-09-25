import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
    deleteEnabled : Boolean;
    product: any;
    productId : any;

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{ console.log("Product ID", params['id']);
    this.productId = params['id']})
     this.product = {name: "", qty:0, price:0}
    this.getOneProduct();
    this.deleteEnabled = false;
  }

  getOneProduct(){
    let obs = this._httpService.getOneProduct(this.productId);
    obs.subscribe( data => {

        if(data['message'] == "Success"){
            this.product = data['data'];
            if(this.product.qty == 0){
                this.deleteEnabled = true;
            }

        console.log("Fetched Product",this.product);
        }
        else{
            this._router.navigate(['/products']);
        }


    })
}
    deleteProduct(){
    if(this.product.qty == 0){
        let obs = this._httpService.deleteProduct(this.productId);
        obs.subscribe( data => {

        if(data['message'] == "Success"){
            this._router.navigate(['/products']);


        }

        })
    }
    }



}
