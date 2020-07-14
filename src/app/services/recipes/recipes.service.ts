import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../models/recipes/recipe.model';
import {RecipeDto} from "../../models/recipes/recipe.dto";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private backEndUrl = environment.backendLink;
  constructor(private http: HttpClient) { }

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

  public putRecipe(id: number, data): Observable<RecipeModel> {
    const obj = data;
    return this.http.put<RecipeModel>(`${this.backEndUrl}`, obj);
  }

  public deleteRecipe(id: number): Observable<RecipeModel> {
    return this.http.delete<RecipeModel>(`${this.backEndUrl}`);
  }
}
