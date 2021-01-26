import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../../models/recipes/recipe.model';
import { RecipesService } from '../../../services/recipes/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {

  }
}
