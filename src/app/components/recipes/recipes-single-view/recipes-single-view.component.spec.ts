import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSingleViewComponent } from './recipes-single-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipesService } from '../../../services/recipes/recipes.service';

describe('RecipesSingleViewComponent', () => {
  let component: RecipesSingleViewComponent;
  let fixture: ComponentFixture<RecipesSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesSingleViewComponent ],
      imports: [HttpClientTestingModule],
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
});
