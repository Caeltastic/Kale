import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class IngredientsService {

  private baseUrl = `${environment.apiBaseUrl}/ingredients`;

  // Local cache as a BehaviorSubject
  private ingredientsSubject = new BehaviorSubject<Ingredient[]>([]);
  ingredients$ = this.ingredientsSubject.asObservable();

  constructor(private http: HttpClient) {}

  /** Fetch from API and store locally */
  fetchAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.baseUrl).pipe(
      tap(data => this.ingredientsSubject.next(data))
    );
  }

  /** Get cached value directly (non-reactive) */
  getLocalIngredients(): Ingredient[] {
    return this.ingredientsSubject.getValue();
  }

  getIngredientById(id: string): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.baseUrl}/${id}`);
  }

  createIngredient(ingredient: Omit<Ingredient, 'id'>): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.baseUrl, ingredient).pipe(
      tap(newIngredient => {
        const current = this.getLocalIngredients();
        this.ingredientsSubject.next([...current, newIngredient]);
      })
    );
  }

  deleteIngredient(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        const updated = this.getLocalIngredients().filter(i => i.id !== id);
        this.ingredientsSubject.next(updated);
      })
    );
  }

  groupByCategoryName(ingredients: Ingredient[]): Record<string, Ingredient[]> {
    return ingredients.reduce((acc, ingredient) => {
      const categoryName = ingredient.category_name; // category_id is name
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(ingredient);
      return acc;
    }, {} as Record<string, Ingredient[]>);
  }

}
