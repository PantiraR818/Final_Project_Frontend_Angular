import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  id: any;
  productForm!: FormGroup;
  currentProduct: any;
  products:any;
  searchForm!: FormGroup;

  constructor(private service: ProductService, private router: Router, private activatedRouter: ActivatedRoute) { }

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

    this.searchForm = new FormGroup({
      name: new FormControl()
    });

    this.service.getProducts().subscribe((res: any)=>{
      this.products = res.data;
    })

    this.service.getProductById(this.id).subscribe((res)=>{
      this.currentProduct = res.data;
      this.productForm.controls['name'].setValue(this.currentProduct.name);
      this.productForm.controls['img'].setValue(this.currentProduct.img);
      this.productForm.controls['categoryname'].setValue(this.currentProduct.categoryname);
      this.productForm.controls['details'].setValue(this.currentProduct.details);
     
    });

  
  }


  // btnReviews(idReview:any){
  //   let traderRequest = {
  //     star : this.productForm.value.star,
  //     comment : this.productForm.value.comment
  //   }
  //   // alert(review.star + review.comment + idReview )
  //   this.service.reviewProduct(idReview,review).subscribe((res)=>{
  //     this.router.navigateByUrl('/',{skipLocationChange :true})   
  //       .then(()=> this.router.navigate(['/product/detail/'+idReview]))
  //   })
  // }

}

