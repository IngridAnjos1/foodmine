import { FoodService } from './../../../services/food.service';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  foods:Food[] = [];
  constructor(private foodService:FoodService){
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
