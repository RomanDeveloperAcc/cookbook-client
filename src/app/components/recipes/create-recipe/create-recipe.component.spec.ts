import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeComponent } from './create-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RouterTestingModule } from '@angular/router/testing';

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
      providers: [RecipesService]
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
});
