import { UserService } from './../user.service';
import { SellproductService } from './../sellproduct.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SellcategoryService } from './../sellcategory.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sellform',
  templateUrl: './sellform.component.html',
  styleUrls: ['./sellform.component.css']
})
export class SellformComponent implements OnInit {
  data: any;
  productForm: FormGroup;
  selectedImage: File | null = null;
  loggedInUser :any

  constructor(
    private cookieService: CookieService,
    private userService : UserService,
    private sellCategoryService: SellcategoryService,
    private formBuilder: FormBuilder,
    private productService: SellproductService,
    private route: Router
  ) {
    this.productForm = this.formBuilder.group({
      sellngItem: ['', Validators.required],
      Category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
     
    });
  }

  ngOnInit(): void {
    
    const user_id =parseInt(this.cookieService.get('user_id'));
    console.log(user_id)


  
    this.sellCategoryService.getCategory().subscribe((data) => {
      this.data = data;
      console.log(this.data);
      // this.userService.setIsSeller(true)
    });
  }

  // onSubmit(data: any) {
  //   console.log(this.productForm.value)
  //   this.productService.saveProduct(this.productForm.value).subscribe(data => {
     
    // })
  // }

  onImageSelect(event: any) {
    const file = event.target.files[0];
    this.selectedImage = file;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('sellngItem', this.productForm.get('sellngItem')?.value);
    formData.append('Category', this.productForm.get('Category')?.value);
    formData.append('description', this.productForm.get('description')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    const user_id = parseInt(this.cookieService.get('user_id'));
    formData.append('user',  user_id.toString());
    console.log(formData.get('user'))
    this.productService.saveProduct(formData).subscribe(

      res => console.log(res),
      error => console.log(error)
    );
    alert("item added")

    this.route.navigate([''])
  }
}
