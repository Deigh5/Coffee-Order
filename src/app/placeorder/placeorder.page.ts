import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../service/coffee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.page.html',
  styleUrls: ['./placeorder.page.scss'],
})
export class PlaceorderPage implements OnInit {

  orderz
  namez
  cid
  sugar
  milk
  quantity
  totalPrice = 0
  name
  id

  constructor(public cService:CoffeeService, public route:ActivatedRoute) 
  { 
    // this.orderz = this.cService.getOrders() 
    this.namez = this.cService.getCatName()
  }

  placeOrders()
  {
    this.cService.placeOrders(this.id,this.orderz.name ,this.sugar, this.milk, this.quantity, this.totalPrice)
  }


  viewCategory(cid)
  {
    this.cService.viewCategory(cid)
  }

  viewOrder(id)
  {
    this.cService.viewOrder(id)
  }

  getSugar(event)
  {
    this.sugar = event.detail.value 
  }

  getMilk(event)
  {
    this.milk = event.detail.value
  }

  getQuantity(event)
  {
    this.quantity = event.detail.value
    this.getTotalPrice()
  }

  getTotalPrice()
  {
    this.totalPrice = this.orderz.price
    this.totalPrice = this.totalPrice * this.quantity
  }
  getCatName()
  {
    this.name = this.cService.getCatName()
  }

  getName(Catname)
  {
    this.cService.getName(Catname)
  }

  ngOnInit() 
  {
    this.route.paramMap.subscribe(params => {this.cid = params.get('cid')
    this.orderz = this.cService.viewCategory(this.cid)
    this.totalPrice = this.orderz.price
   })
  }

}
