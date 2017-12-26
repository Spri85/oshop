import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
  }


}
