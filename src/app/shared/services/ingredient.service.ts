import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

@Injectable()
export class IngredientService {

  constructor(private _apiService: ApiService) {
  }

  public getAll(): Observable<Ingredient[]> {
    return this._apiService.get<Ingredient[]>('ingredients');
  }

  public get(ingredientId: number): Observable<Ingredient> {
    return this._apiService.get<Ingredient>(`ingredients/${ ingredientId }`);
  }

  public create(ingredient: Ingredient): Observable<Ingredient> {
    return this._apiService.post<Ingredient, Ingredient>('ingredients', ingredient);
  }

  public update(ingredient: Ingredient): Observable<Ingredient> {
    return this._apiService.put<Ingredient, Ingredient>(`ingredients/${ ingredient.id }`, ingredient);
  }

  public delete(ingredientId: number): Observable<any> {
    return this._apiService.delete<any>(`ingredients/${ ingredientId }`);
  }

  public getCategories(): Observable<string[]> {
    return this._apiService.get('ingredients/categories');
  }
}
