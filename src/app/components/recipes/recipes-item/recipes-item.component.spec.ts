import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesItemComponent } from './recipes-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReadMorePipe } from '../../../pipes/read-more.pipe';

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
        RouterTestingModule.withRoutes([])
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
});
