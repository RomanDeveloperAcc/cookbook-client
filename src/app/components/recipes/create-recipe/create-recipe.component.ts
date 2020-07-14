import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RecipesService} from "../../../services/recipes/recipes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  public createRecipeForm = this.fb.group({
    title: ['', Validators.required],
    text: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private recipesService: RecipesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.recipesService.postRecipe(this.createRecipeForm)
      .subscribe(data => data.title ? this.router.navigate(['/recipes']) : console.log(data));
  }
}
