import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../api_burger/api/burgers.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgerList;
  constructor(private burgerService : BurgersService) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() :void{
this.burgerList =this.burgerService
.listBurgers().subscribe(burgerList => this.burgerList = burgerList);

  }
}
