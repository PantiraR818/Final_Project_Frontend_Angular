import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //http://
  private url = `${environment.serviceUrl}/product` //<<============ ตรงนี้ ตอนแรก /product ลองลองเปลี่ยนผลลัพเหมือนกัน
  constructor(private http: HttpClient) { }

    getProducts(): any{
        return this.http.get<any>(this.url);
    }

    getProductById(id: any){
        // localhost:4000/book/book:id
        let getUrl = `${this.url}/${id}`;
        return this.http.get<any>(getUrl);
    }

    getProductByName(name: any){
         // localhost:4000/book/name/bookname
         let getUrl = `${this.url}/name/${name}`;
         return this.http.get<any>(getUrl);
     }

     getProductsByPoster(name: any){
      let getUrl = `${this.url}/poster/${name}`;
      return this.http.get<any>(getUrl);
  }

    // addProduct(product: any){
    //     let getUrl = `${this.url}/new`;
    //     return this.http.post<any>(getUrl,product)
    //     .pipe(map((res)=>{
    //         return res;
    //     }));
    // }

    addProduct(product: any) {
        return this.http.post<any>(this.url, product)
          .pipe(map((res) => {
            return res;
          }));
      }

    updateProduct(product: any, id: any){
        let getUrl = `${this.url}/${id}`;
        return this.http.put<any>(getUrl,product)
        .pipe(map((res)=>{
            return res;
        }));
    }

    deleteProduct(id: any){
        let getUrl = `${this.url}/${id}`;
        return this.http.delete<any>(getUrl);
    }

    deleteRequest(id: any,request: any){
      let getUrl = `${this.url}/request/${id}`;
      return this.http.patch<any>(getUrl,request);
  }

    editProduct(id : any,traderRequest:any){
      let getUrl = `${this.url}/${id}`;
      return this.http.patch<any>(getUrl,traderRequest)
        .pipe(map((res)=>{
          return res;
        }));
  }

    editRequest(id : any,traderRequest:any){
    let getUrl = `${this.url}/confirm/${id}`;
    return this.http.patch<any>(getUrl,traderRequest)
      .pipe(map((res)=>{
        return res;
      }));
}
}