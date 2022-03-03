import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  products:any;
  searchForm!: FormGroup;
  name : any ;
  myProducts : any ;
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

    this.searchForm = new FormGroup({
      name: new FormControl()
    });

    // this.service.getProducts().subscribe((res: any)=>{
    //   this.products = res.data;
    // })

    this.service.getProductsByPoster(this.name).subscribe((res :any)=>{
      this.myProducts = res.data;
      // console.log(this.myProducts);
    });
  }

  searchName(){
    this.service.getProductByName(this.searchForm.value.name).subscribe((res: any)=>{
      this.products = res.data;
    })
  }

  daleteProduct(id: any){
    if(confirm("Comfirm Delete")){
      this.service.deleteProduct(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange: true})
        .then(()=>{
          this.router.navigate(['/menu']);
          this.toast.error({detail:'Success',summary:'ลบสินค้าสำเร็จ', sticky:true,position:'tr'})
        });
      });
    }
  }

}

