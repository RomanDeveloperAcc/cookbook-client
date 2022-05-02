import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSingleViewComponent } from './recipes-single-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RouterTestingModule } from "@angular/router/testing";
import { RECIPES_MAT_IMPORTS } from "../recipes.module";
import { of } from "rxjs";
import { RecipeModel } from "../../../models/recipes/recipe.model";

describe('RecipesSingleViewComponent', () => {
  let component: RecipesSingleViewComponent;
  let fixture: ComponentFixture<RecipesSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesSingleViewComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        ...RECIPES_MAT_IMPORTS,
      ],
      providers: [RecipesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getRecipeItem', () => {
    it('should get history item if there is one', () => {
      component['recipesService'].setHistoryItem();
      component['recipeId'] = 1;

      spyOn(component['recipesService'], 'getOneHistoryRecipe').and.returnValue(of({}));
      component['getRecipeItem']();
      expect(component['recipesService'].getOneHistoryRecipe).toHaveBeenCalled();
    });

    it('should get recipe item if there is no history item', () => {
      component['recipesService'].setHistoryItem(false);
      component['recipeId'] = 1;

      spyOn(component['recipesService'], 'getOneRecipe').and.returnValue(of({} as RecipeModel));
      component['getRecipeItem']();
      expect(component['recipesService'].getOneRecipe).toHaveBeenCalled();
    });
  });

  describe('#getHistoryRecipes', () => {
    it('should get history recipes if there is no history item', () => {
      component.historyItem = false;
      component['recipeId'] = 1;
      spyOn(component['recipesService'], 'getHistoryRecipes').and.returnValue(of([]));

      component['getHistoryRecipes']();
      expect(component['recipesService'].getHistoryRecipes).toHaveBeenCalled();
    });

    it('should not get history recipes if there is history item', () => {
      component.historyItem = true;
      component['recipeId'] = 1;
      spyOn(component['recipesService'], 'getHistoryRecipes').and.returnValue(of([]));

      component['getHistoryRecipes']();
      expect(component['recipesService'].getHistoryRecipes).not.toHaveBeenCalled();
    });
  });
});
