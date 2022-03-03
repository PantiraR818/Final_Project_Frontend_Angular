import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = `${environment.serviceUrl}/category` //<<============ ตรงนี้ ตอนแรก /product ลองลองเปลี่ยนผลลัพเหมือนกัน
  constructor(private http: HttpClient) { }

  
  getCategory(): any{
    return this.http.get<any>(this.url);
}
}
