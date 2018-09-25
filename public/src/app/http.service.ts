import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addProduct(data){
    return this._http.post('/api/products/add', data);
  }

  getAllProducts(){
  return this._http.get('/api/products');
  }

  deleteProduct(id){
    return this._http.delete("/api/product/"+ id);
  }

  updateProduct(id, data){
    return this._http.put("/api/product/"+ id, data);
  }

  getOneProduct(id){
    return this._http.get("/api/product/"+ id )
  }
}
