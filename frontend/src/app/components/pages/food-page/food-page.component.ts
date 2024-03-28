import { FoodService } from './../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {

  food!: Food;
  constructor(activateRoute:ActivatedRoute, foodService:FoodService){
    activateRoute.params.subscribe((params) =>{
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })
  }
}
