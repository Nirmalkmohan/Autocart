import { SharedDataServiceService } from './../shared-data-service.service';
import { Component, OnInit } from '@angular/core';
import { FilterCategoryService } from '../filter-category.service';
import { SellcategoryService } from '../sellcategory.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data: any;
  products: any;

  constructor(
    private sellCategoryService: SellcategoryService,
    private filterCategoryService: FilterCategoryService,
    private sharedDataService: SharedDataServiceService
  ) {}

  ngOnInit(): void {
    this.sellCategoryService.getCategory().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }

  filterCategory(event: Event): void {
    const id = (event.target as HTMLSelectElement)?.value;
    console.log(id);
    this.filterCategoryService.filterCategory(parseInt(id)).subscribe((ads) => {
      this.products = ads;
      console.log(this.products);
      this.sharedDataService.setFilteredProducts(this.products);
    });
  }
}

