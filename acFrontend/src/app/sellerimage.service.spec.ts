import { TestBed } from '@angular/core/testing';

import { SellerimageService } from './sellerimage.service';

describe('SellerimageService', () => {
  let service: SellerimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
