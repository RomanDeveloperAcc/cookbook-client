import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSingleViewComponent } from './recipes-single-view.component';

describe('RecipesSingleViewComponent', () => {
  let component: RecipesSingleViewComponent;
  let fixture: ComponentFixture<RecipesSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesSingleViewComponent ]
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
