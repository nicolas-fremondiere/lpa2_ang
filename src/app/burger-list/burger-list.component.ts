import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../api_burger/api/burgers.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {
  breakingpoint
  burgerList;
  constructor(private burgerService : BurgersService) { }

  ngOnInit(): void {
    this.getBurgers();
    this.breakingpoint = (window.innerWidth <=550) ? 2 : 6
  }

  getBurgers() :void{
this.burgerList =this.burgerService
.listBurgers().subscribe(burgerList => this.burgerList = burgerList);

  }
  onResize(event)
   {
     this.breakingpoint = (event.target.innerWidth <= 550) ? 2 : 6;
   }

}
