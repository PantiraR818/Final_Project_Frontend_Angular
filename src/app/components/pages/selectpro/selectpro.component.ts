import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-selectpro',
  templateUrl: './selectpro.component.html',
  styleUrls: ['./selectpro.component.css']
})
export class SelectproComponent implements OnInit {

  myProducts : any ;
  name : any ;
  namepro: any ;
  currentUser: any;
  isLoggedIn = false;
  selectpro!: FormGroup;
  id:any;

  constructor(private service : ProductService, private router : Router,private tokenStorage: TokenStorageService,private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(params=>{
      this.id = params['id'];
    });

    
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
      this.name = this.currentUser.name;
    }

    this.service.getProductsByPoster(this.name).subscribe((res :any)=>{
      this.myProducts = res.data;
      // this.namepro = this.myProducts.name;
      //  console.log(this.myProducts);
      // console.log(this.traderRequest);
    });
    
    
  }
  
  editProduct(_id : any){
    let product : any
    this.service.getProductById(_id).subscribe((res :any)=>{
       product = res.data ;
       let traderRequest = {
        requestName:this.currentUser.name,
        requestEmail: this.currentUser.email,
        requestTel: this.currentUser.tel,
        itemName:product.name,
        itemDetails:product.details,
        img:product.img,
      }
       console.log(traderRequest);
      // alert(traderRequest);
      this.service.editProduct(this.id, traderRequest).subscribe((res)=>{
        this.router.navigateByUrl('/', {skipLocationChange: true})
      })
      //  console.log(product);
    });
    
    
    
  }
  

}
