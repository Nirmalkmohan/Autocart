import { SharedDataServiceService } from './../shared-data-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellproductService } from '../sellproduct.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  @Input() products: any;
  data: any;
  filteredProducts: any;
  sellerData!: string;
  product: any;
  id: any;

  constructor(
    private sellproduct: SellproductService,
    private router: Router,
    private sharedDataService: SharedDataServiceService
  ) {}

  ngOnInit(): void {
    this.sharedDataService.filteredProducts$.subscribe((products) => {
      this.filteredProducts = products;
      console.log(this.filteredProducts);
    });

    if (!this.filteredProducts) {
      this.fetchProducts();
    }
  }

  fetchProducts() {
    this.sellproduct.listProducts().subscribe((data) => {
      this.data = data;
      this.filteredProducts = this.data;
      console.log(this.data);
    });
  }

  showProductDetails(productId: number) {
    console.log(productId);
    this.sellproduct.setData(productId);
    this.router.navigate(['pro-details']);
  }

  filterProductsByCategory(categoryId: number) {
    // no longer needed as the data is now coming from the shared service
  }
}
