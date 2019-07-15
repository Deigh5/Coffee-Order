import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../service/coffee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orderzPlaced
  id

  constructor(public coffService:CoffeeService) 
  {
    this.orderzPlaced = this.coffService.getOrders()
    console.log(this.orderzPlaced);
    
  }

  // viewOrder(id)
  // {
  //   this.coffService.viewOrder(id)
  // }

  getTotalPrice(Cprice)
  {
    this.coffService.getTotalPrice(Cprice)
  }



  ngOnInit() 
  {
  //    this.route.paramMap.subscribe(params => {this.id = params.get('id')
  //    this.orderzPlaced = this.coffService.viewOrder(this.id)
  //  })
  }

}
