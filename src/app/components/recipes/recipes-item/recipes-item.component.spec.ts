import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesItemComponent } from './recipes-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReadMorePipe } from '../../../pipes/read-more.pipe';
import { RECIPES_MAT_IMPORTS } from "../recipes.module";
import { RecipeModel } from "../../../models/recipes/recipe.model";

describe('RecipesItemComponent', () => {
  let recipesService: RecipesService;
  let component: RecipesItemComponent;
  let fixture: ComponentFixture<RecipesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipesItemComponent,
        ReadMorePipe
      ],
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
    fixture = TestBed.createComponent(RecipesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    recipesService = TestBed.get(RecipesService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('#updateItem', () => {
    it('should update recipe item', () => {
      const mockedString = 'test';
      const mockedNumber = 1;

      spyOn(component['recipesService'], 'setUpdateData');
      spyOn(component['recipesService'], 'setUpdateId');
      spyOn(component['recipesService'], 'setHistoryItem');

      component.updateItem(mockedString, mockedString, mockedNumber);

      expect(component['recipesService'].setUpdateData).toHaveBeenCalled();
      expect(component['recipesService'].setUpdateId).toHaveBeenCalled();
      expect(component['recipesService'].setHistoryItem).toHaveBeenCalled();
    });
  });

  describe('#openDialogWindow', () => {
    it('should open dialog window and handle data', () => {
      const event = new Event('');

      spyOn(event, 'stopPropagation');
      spyOn(component['dialogRef'], 'open');
      spyOn(component['recipesService'], 'setRecipeId');

      component.openDialogWindow(event);

      expect(event.stopPropagation).toHaveBeenCalled();
      expect(component['dialogRef'].open).toHaveBeenCalled();
      expect(component['recipesService'].setRecipeId).toHaveBeenCalled();
    });
  });

  describe('#goToSingleView', () => {
    it('should go to single recipe view', () => {
      component.history = false;
      component.recipeItem = {
        recipeId: 123,
      } as RecipeModel;

      spyOn(component['router'], 'navigate');
      component.goToSingleView();
      expect(component['router'].navigate).toHaveBeenCalled();
    });

    it('should go to single history view', () => {
      component.history = true;
      component.recipeItem = {
        recipeId: 123,
      } as RecipeModel;

      spyOn(component['router'], 'navigate');
      spyOn(component['recipesService'], 'setHistoryItem');

      component.goToSingleView();

      expect(component['router'].navigate).toHaveBeenCalled();
      expect(component['recipesService'].setHistoryItem).toHaveBeenCalled();
    });
  });
});
