import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    private url = `${environment.serviceUrl}/member`
    constructor(private http:HttpClient) {}

    login(login: any){
        return this.http.post<any>(`${this.url}/login`, login)
        .pipe(map((res) => {
            return res;
          }));
    }
    
  addMember(member : any){
    return this.http.post<any>(this.url,member)
    .pipe(map((res)=>{
      return res;
    }));
  }

  // Get all Product
  // getProduct(): any{
  //   return this.http.get<any>(this.url);
  // }

  getMember(){
    return this.http.get<any>(this.url);
  }
  
  getMemberById(id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  }

  updateMember(member: any, id: any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl,member)
    .pipe(map((res)=>{
        return res;
    }));
}

  //Get By Id
  // getProductById(id: any){
  //   let getUrl = `${this.url}/${id}`;
  //   return this.http.get<any>(getUrl);
  // }


  //add Product
  // addProduct(product: any){
  //   return this.http.post<any>(this.url, product)
  //     .pipe(map((res)=>{
  //       return res;
  //     }));
  // }

  //Update  Product
  // updateProduct(product: any ,id : any){
  //   let getUrl = `${this.url}/${id}`;
  //   return this.http.put<any>(getUrl, product)
  //     .pipe(map((res)=>{
  //       return res;
  //     }));
  // }

  //Delete
  // deleteProduct(id:any){
  //   let getUrl = `${this.url}/${id}`;
  //   return this.http.delete<any>(getUrl) ;
  // }


//   reviewProduct(idReview :  any ,review: any){
//     let getUrl = `${this.url}/${idReview}`;
//     return this.http.patch<any>(getUrl, review)
//       .pipe(map((res)=>{
//         return res;
//       }));
//   }
}
