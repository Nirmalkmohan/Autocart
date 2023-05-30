import { TestBed } from '@angular/core/testing';

import { SellcategoryService } from './sellcategory.service';

describe('SellcategoryService', () => {
  let service: SellcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
