import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { RecipesListComponent } from './recipes-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RecipeModel } from "../../../models/recipes/recipe.model";
import { delay } from "rxjs/operators";
import { of } from "rxjs";
import { provideMockStore } from "@ngrx/store/testing";

describe('RecipesListComponent', () => {
  let recipe: RecipeModel;
  let recipesService: RecipesService;
  let component: RecipesListComponent;
  let fixture: ComponentFixture<RecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipesListComponent,
      ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        RecipesService,
        provideMockStore(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    recipesService = TestBed.get(RecipesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load recipes', () => {
  //   spyOn(recipesService, 'getRecipes').and.returnValue(of([recipe]).pipe(delay(1)));
  //
  //   component.ngOnInit();
  //
  //   expect(component.recipes[0]).toBeUndefined();
  //   expect(recipesService.getRecipes).toHaveBeenCalledWith();
  //
  //   tick(100);
  //   expect(component.recipes).toEqual([recipe]);
  // });
});
