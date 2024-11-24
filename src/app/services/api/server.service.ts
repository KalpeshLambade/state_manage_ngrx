import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipes';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<Recipe[]> {
    const url = environment.server + 'recipes';
    return this.http.get<any>(url).pipe(
      map((response: any) => response.recipes)
    );
  }

}
