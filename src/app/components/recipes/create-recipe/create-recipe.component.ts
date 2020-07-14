import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RecipesService } from '../../../services/recipes/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit, AfterViewInit {
  @ViewChild('title', {static: true})
  title: ElementRef;
  @ViewChild('text', {static: true})
  text: ElementRef;
  @ViewChild('ctaBtn', {static: true})
  ctaBtn: ElementRef;
  public createRecipeForm = this.fb.group({
    title: ['', Validators.required],
    text: ['', Validators.required]
  });
  private type = 'create';

  constructor(private fb: FormBuilder,
              private recipesService: RecipesService,
              private router: Router) { }

  ngOnInit(): void {
    this.recipesService.updateData ?
      this.type = 'update' : this.type = 'comment';
  }

  ngAfterViewInit(): void {
    this.setInputFields();
    this.recipesService.setUpdateData(null);
  }

  private setInputFields(): void {
    if (this.recipesService.updateData) {
      this.title.nativeElement.value = this.recipesService.updateData.title;
      this.text.nativeElement.value = this.recipesService.updateData.description;
    } else {
      this.title.nativeElement.value = '';
      this.text.nativeElement.value = '';
    }
  }

  public onSubmit(): void {
    if (this.type === 'create') {
      this.recipesService.postRecipe(this.createRecipeForm)
        .subscribe(data => data.title ? this.router.navigate(['/recipes']) : console.log(data));
    } else {
      this.recipesService.putRecipe(this.createRecipeForm)
        .subscribe(data => data.title ? this.router.navigate(['/recipes']) : console.log(data));

    }
  }
}
