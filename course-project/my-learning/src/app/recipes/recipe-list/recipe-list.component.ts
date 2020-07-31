import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipe', 'This is test recipe for testing purpose.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxAzp55XZdFLqcMyyjKYvGJ0-di65-MMQxTO7AkuqDej4jUX3'),
    new Recipe('Test Recipe', 'This is test recipe for testing purpose.', 'https://cdn.pixabay.com/photo/2016/10/25/13/42/indian-1768906_960_720.jpg')
  ];
  constructor() {}

  ngOnInit() {
  }

}
