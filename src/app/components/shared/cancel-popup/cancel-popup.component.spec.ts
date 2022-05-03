import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelPopupComponent } from './cancel-popup.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SHARED_MAT_IMPORTS } from "../shared.module";
import { of } from "rxjs";
import { RecipeModel } from "../../../models/recipes/recipe.model";

describe('CancelPopupComponent', () => {
  let component: CancelPopupComponent;
  let fixture: ComponentFixture<CancelPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelPopupComponent ],
      imports: [
        ...SHARED_MAT_IMPORTS,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{
          path: 'recipes',
          redirectTo: ''
        }]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#removeRecipe', () => {
    it('should remove recipe', () => {
      component['recipesService'].setRecipeId(1);
      spyOn(component['recipesService'], 'deleteRecipe').and.returnValue(of({} as RecipeModel));
      spyOn(component, 'closeDialogWindow');
      spyOn(component['router'], 'navigate');

      component.removeRecipe();

      expect(component['recipesService'].deleteRecipe).toHaveBeenCalled();
      expect(component.closeDialogWindow).toHaveBeenCalled();
      expect(component['router'].navigate).toHaveBeenCalled();
    });
  });

  describe('#closeDialogWindow', () => {
    it('should close dialog window', () => {
      spyOn(component['dialogRef'], 'closeAll');
      component.closeDialogWindow();
      expect(component['dialogRef'].closeAll).toHaveBeenCalled();
    });
  });
});
