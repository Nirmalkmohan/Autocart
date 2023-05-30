import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellformComponent } from './sellform.component';

describe('SellformComponent', () => {
  let component: SellformComponent;
  let fixture: ComponentFixture<SellformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
