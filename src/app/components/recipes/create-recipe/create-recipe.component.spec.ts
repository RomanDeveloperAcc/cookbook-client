import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeComponent } from './create-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from "@ngrx/store/testing";
import { of } from "rxjs";
import { RecipeModel } from "../../../models/recipes/recipe.model";

describe('CreateRecipeComponent', () => {
  let component: CreateRecipeComponent;
  let fixture: ComponentFixture<CreateRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipeComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])]
      ,
      providers: [
        RecipesService,
        provideMockStore(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#setInputFields', () => {
    it('should set input fields with data', () => {
      const mockedString = 'test';
      component['recipesService'].updateData = {
        title: mockedString,
        description: mockedString
      };
      component['setInputFields']();
      expect(component.title.nativeElement.value).toEqual(mockedString);
      expect(component.text.nativeElement.value).toEqual(mockedString);
    });

    it('should set empty input fields', () => {
      component['recipesService'].updateData = undefined;
      component['setInputFields']();
      expect(component.title.nativeElement.value).toEqual('');
      expect(component.text.nativeElement.value).toEqual('');
    });
  });

  describe('#onSubmit', () => {
    it('should create recipe', () => {
      component['type'] = 'create';
      spyOn(component['store'], 'dispatch');
      component.onSubmit();
      expect(component['store'].dispatch).toHaveBeenCalled();
    });

    it('should update recipe', () => {
      component['type'] = 'update';
      spyOn(component['recipesService'], 'putRecipe').and.returnValue(of({} as RecipeModel));
      component.onSubmit();
      expect(component['recipesService'].putRecipe).toHaveBeenCalled();
    });
  });

  describe('#sendHistoryRecipes', () => {
    it('should post history recipes', () => {
      spyOn(component['recipesService'], 'postHistoryRecipe').and.returnValue(of({}));
      component['sendHistoryRecipes'](1);
      expect(component['recipesService'].postHistoryRecipe).toHaveBeenCalled();
    });
  });
});
