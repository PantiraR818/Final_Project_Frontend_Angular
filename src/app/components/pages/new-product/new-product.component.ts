import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;
  currentUser: any;
  isLoggedIn = false;
  category : any;
  constructor(private service: ProductService, private router: Router,private tokenStorage: TokenStorageService ,private service2: CategoriesService,private toast:NgToastService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
    }

    this.productForm = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      categoryname: new FormControl(),
      details: new FormControl()
    });
    

    this.service2.getCategory().subscribe((res: any)=>{
      this.category = res.data;
    })
  }

  

  addProduct(){
    let product = {
      name: this.productForm.value.name,
      img: this.productForm.value.img,
      categoryname: this.productForm.value.categoryname,
      details: this.productForm.value.details,

      postName:this.currentUser.name,
      postEmail: this.currentUser.email,
      postTel: this.currentUser.tel
    }
      this.service.addProduct(product).subscribe((res)=>{
        console.log(res);
        if(res.msg="Add a product complete."){
          this.toast.success({detail:'Success',summary:'เพิ่มสินค้าสำเร็จ', sticky:true,position:'tr'})
          // window.alert("Add Complete");
          this.router.navigate(["/"]);
        }else{
          this.toast.error({detail:'Success',summary:'เพิ่มสินค้าไม่สำเร็จ', sticky:true,position:'tr'})
          // window.alert("Add Not Complete !");
          this.router.navigate(["/"]);
        }
      });
  }

}
