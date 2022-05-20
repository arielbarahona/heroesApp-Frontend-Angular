import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Listado de heroes
  getHeroes():Observable<Heroe[]> { 
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  //Buscador
  getHeroePorId( id: string):Observable<Heroe> { 
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  //Buscador
  getSugerencias(termino: string):Observable<Heroe[]> { 
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }

  //Crear, Agregar Heroe
  agregarHeroe( heroe: Heroe): Observable<Heroe> { 
    return this.http.post<Heroe>(`${ this.baseUrl}/heroes`, heroe)
  }

  //Actualizar Heroe
  actualizarHeroe( heroe: Heroe): Observable<Heroe> { 
    return this.http.put<Heroe>(`${ this.baseUrl}/heroes/${heroe.id}`, heroe)
  }

   //Eliminar Heroe
  borrarHeroe( id: string ): Observable<any> { 
    return this.http.delete<any>(`${ this.baseUrl}/heroes/${id}`)
  }
  
}
