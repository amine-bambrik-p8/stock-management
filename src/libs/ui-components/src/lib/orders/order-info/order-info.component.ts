import { IOrder, IClient } from '@workspace/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'workspace-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {
  @Input()
  order: IOrder;
  @Input()
  client: IClient;
  constructor() { }

  ngOnInit(): void {
  }

}
