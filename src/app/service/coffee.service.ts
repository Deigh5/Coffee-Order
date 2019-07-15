import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }

  orders = []
  categories = [{cid: 1, pic: "cappuccino.jpg", name: "Cappuccino", price: 26},{cid: 2, pic: "latte.jpg", name: "Caffé Latte", price: 30},
                {cid: 3, pic: "espresso.jpg", name: "Espresso", price: 23},{cid: 4, pic: "mocha.jpg", name: "Caffé Mocha", price: 48}, 
                {cid: 5, pic: "coffee.jpg", name: "Plain Coffee", price: 16}]
  
  // oID: number
  // oSugar: number
  // oMilk: boolean
  // oQuantity: number
  // oPrice: number

  Csugar: Int32Array
  Cquantity= 1
  Cmilk: Boolean
  Cprice: number
  Cname
  CoffeePrice

  totalPrice1: any = 0

  // placeOrders(oID, oSugar, oMilk, oQuantity, oPrice)
  // {
  //   this.orders.push({id:oID, sugar:oSugar, milk: oMilk, quantity:oQuantity, price:oPrice})
  // }

  placeOrders(oID, name, oSugar, oMilk, oQuantity, oPrice)
  {
    this.orders.push({CID:oID, Cname: name, Csugar:oSugar, Cmilk:oMilk, Cquantity:oQuantity, Cprice:oPrice})
  }

  viewCategory(cid)
  {
    let selectedCategory

    this.categories.forEach(category =>
      {
        if(category.cid == cid)
        {
          selectedCategory = category
        }
      })

      return selectedCategory
  }

  viewOrder(id)
  {
    let selectedOrder = []
    this.orders.forEach(order =>
      {
        if(order.id == id)
        {
          selectedOrder = order
        }
      })

      return selectedOrder
  }

  getTotalPrice(Cquantity)
  {
    this.totalPrice1 = this.CoffeePrice * Cquantity

    return this.totalPrice1
  }

  getPrice()
  {
    return this.CoffeePrice
  }

  getName(Catname)
  {
    this.Cname = Catname.name
    this.CoffeePrice = Catname.price
  }

  getCatName()
  {
    return this.Cname
  }

  getOrders()
  {
    return this.orders
  }

  getCategories()
  {
    return this.categories
  }
}
