import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../models/recipes/recipe.model';
import { RecipeDto } from '../../models/recipes/recipe.dto';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private backEndUrl = environment.backendLink;
  public tempRecipeItem: RecipeModel;
  public updateData: RecipeDto;
  public tempRecipeId: number;
  constructor(private http: HttpClient) { }

  public setUpdateData(obj: RecipeDto): void {
    this.updateData = obj;
  }

  public setUpdateId(id: number): void {
    this.tempRecipeId = id;
  }

  public postRecipe(form): Observable<RecipeModel> {
    const data: RecipeDto = {
      title: form.value.title,
      description: form.value.text
    };
    return this.http.post<RecipeModel>(`${this.backEndUrl}/recipes`, data);
  }

  public getRecipes(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(`${this.backEndUrl}/recipes`);
  }

  public getNewestRecipes(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(`${this.backEndUrl}/recipes/new`);
  }

  public getOneRecipe(id: number): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`${this.backEndUrl}/recipes/${id}`);
  }

  public putRecipe(form): Observable<RecipeModel> {
    const data: RecipeDto = {
      title: form.value.title,
      description: form.value.text
    };

    return this.http.put<RecipeModel>(`${this.backEndUrl}/recipes/${this.tempRecipeId}`, data);
  }

  public deleteRecipe(id: number): Observable<RecipeModel> {
    return this.http.delete<RecipeModel>(`${this.backEndUrl}/recipes/${id}`);
  }
}
