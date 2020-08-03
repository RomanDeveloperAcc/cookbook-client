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
  public updateData: RecipeDto;
  public tempRecipeId: number;
  public historyItem = false;
  public recipeId: number;
  private backEndUrl = environment.backendLink;

  constructor(private http: HttpClient) { }

  public setRecipeId(id: number): void {
    this.recipeId = id;
  }

  public setUpdateData(obj: RecipeDto): void {
    this.updateData = obj;
  }

  public setUpdateId(id: number): void {
    this.tempRecipeId = id;
  }

  public setHistoryItem(value = true): void {
    this.historyItem = value;
  }

  public postRecipe(form): Observable<RecipeModel> {
    const data: RecipeDto = {
      title: form.value.title,
      description: form.value.text
    };

    return this.http.post<RecipeModel>(`${this.backEndUrl}/recipes`, data);
  }

  public postHistoryRecipe(form, id): Observable<object> {
    const data = {
      parentId: id,
      title: form.value.title,
      description: form.value.text
    };

    return this.http.post<object>(`${this.backEndUrl}/history`, data);
  }

  public getRecipes(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(`${this.backEndUrl}/recipes`);
  }

  public getNewestRecipes(): Observable<RecipeModel[]> {
    return this.http.get<RecipeModel[]>(`${this.backEndUrl}/recipes/new`);
  }

  public getHistoryRecipes(id: number): Observable<object[]> {
    return this.http.get<object[]>(`${this.backEndUrl}/history/${id}`);
  }

  public getOneRecipe(id: number): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`${this.backEndUrl}/recipes/${id}`);
  }

  public getOneHistoryRecipe(id: number): Observable<object> {
    return this.http.get<object>(`${this.backEndUrl}/history/item/${id}`);
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
