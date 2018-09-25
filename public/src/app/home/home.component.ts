import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router ) { }

    allProducts: any;
  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    let obs = this._httpService.getAllProducts();
    obs.subscribe( data => {console.log("Got all products", data)
      if(data['message'] == "Success"){
          this.allProducts = data['data'];

          for(var i=0;i<this.allProducts.length; i++){
              this.allProducts[i].num = i+1;
          }
      }
      else{
          console.log("Errors")
      }
    })

}

}
