import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  myProducts : any ;
  name : any ;
  currentUser: any;
  isLoggedIn = false;

  constructor(private service : ProductService, private router : Router,private tokenStorage: TokenStorageService,private toast : NgToastService) { }

  ngOnInit(): void {

    
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
      this.name = this.currentUser.name;
    }

    this.service.getProductsByPoster(this.name).subscribe((res :any)=>{
      this.myProducts = res.data;
      // console.log(this.myProducts);
    });

  }

  daleteRequest(id: any,postid: any){


    
    
    if(confirm("Confirm Delete")){

    let request = {
        _id:id,
       
      }
    this.service.deleteRequest(postid,request).subscribe((res)=>{
      this.router.navigateByUrl('/',{skipLocationChange: true})
      .then(()=>{
        this.router.navigate(['/exchange']);
        this.toast.error({detail:'Success',summary:'ลบรายการคำขอแล้ว', sticky:true,position:'tr'})
      });

      console.log(id,res);
    });
    }
  }

  editRequest(_id : any,postid : any){
    let status = {
      _id:_id,
      status:true 
    }
    this.service.editRequest(postid,status).subscribe((res)=>{
      this.router.navigateByUrl('/',{skipLocationChange: true})
      .then(()=>{
        this.router.navigate(['/exchange']);
        this.toast.info({detail:'Success',summary:'แลกเปลี่ยนสำเร็จ', sticky:true,position:'tr'})
      });
    });
  }



}
