import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemPageComponent } from './recipe-item-page.component';

describe('RecipeItemPageComponent', () => {
  let component: RecipeItemPageComponent;
  let fixture: ComponentFixture<RecipeItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
