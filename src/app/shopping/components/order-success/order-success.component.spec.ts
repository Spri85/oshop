import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSeccessComponent } from './order-seccess.component';

describe('OrderSeccessComponent', () => {
  let component: OrderSeccessComponent;
  let fixture: ComponentFixture<OrderSeccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSeccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSeccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
