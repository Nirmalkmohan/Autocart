import { TestBed } from '@angular/core/testing';

import { SellproductService } from './sellproduct.service';

describe('SellproductService', () => {
  let service: SellproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
