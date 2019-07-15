import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../service/coffee.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {

  categoriez

  constructor(public cofService: CoffeeService) 
  { 
    this.categoriez = this.cofService.getCategories()
  }

  ngOnInit() {
  }

}
