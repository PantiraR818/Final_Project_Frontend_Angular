import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: any;
  productForm!: FormGroup;
  currentProduct: any;

  constructor(private service: ProductService, private router: Router, private activatedRouter: ActivatedRoute, private toast : NgToastService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(),
      img: new FormControl(),
      categoryname: new FormControl(),
      details: new FormControl()
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getProductById(this.id).subscribe((res)=>{
      this.currentProduct = res.data;
      this.productForm.controls['name'].setValue(this.currentProduct.name);
      this.productForm.controls['img'].setValue(this.currentProduct.img);
      this.productForm.controls['categoryname'].setValue(this.currentProduct.categoryname);
      this.productForm.controls['details'].setValue(this.currentProduct.details);
    });
  }

  updateProduct(){
    let product = {
      name: this.productForm.value.name,
      img: this.productForm.value.img,
      categoryname: this.productForm.value.categoryname,
      details: this.productForm.value.details
    }
    this.service.updateProduct(product,this.id).subscribe((res: any)=>{
      this.toast.success({detail:'Success',summary:'อัพเดทสินค้าสำเร็จ', sticky:true,position:'tr'})
      this.router.navigate(["/product"]);
    });
  }

}
