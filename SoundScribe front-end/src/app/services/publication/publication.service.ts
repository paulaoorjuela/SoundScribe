import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  private baseUrl: 'http://localhost:5454';

  constructor(private http: HttpClient) {}

  publicationSubject = new BehaviorSubject<any>({
    publications: [],
    loading: false,
    newPublication: null,
  });

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwt');
    return new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('jwt')}}`,
    });
  }

  getPublications(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/api/publications`, { headers }).pipe(
      tap((publications) => {
        const currentState = this.publicationSubject.value;
        this.publicationSubject.next({ ...currentState, publications });
      })
    );
  }

  postPublication(publication: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .post(`${this.baseUrl}/api/publications`, publication, { headers })
      .pipe(
        tap((newPublication) => {
          const currentState = this.publicationSubject.value;
          this.publicationSubject.next({
            ...currentState,
            publications: [newPublication, ...currentState.publications],
          });
        })
      );
  }

  updatePublication(publication: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .put(`${this.baseUrl}/api/publications${publication.id}`, publication, {
        headers,
      })
      .pipe(
        tap((updatedPublication: any) => {
          const currentState = this.publicationSubject.value;
          const updatedPublications = currentState.publication.map(
            (item: any) =>
              item.id === updatedPublication.id ? updatedPublication : item
          );
          this.publicationSubject.next({
            ...currentState,
            publications: updatedPublications,
          });
        })
      );
  }

  likePublication(id: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .put(`${this.baseUrl}/api/publications${id}/like`, {
        headers,
      })
      .pipe(
        tap((updatedPublication: any) => {
          const currentState = this.publicationSubject.value;
          const updatedPublications = currentState.publication.map(
            (item: any) =>
              item.id === updatedPublication.id ? updatedPublication : item
          );
          this.publicationSubject.next({
            ...currentState,
            publications: updatedPublications,
          });
        })
      );
  }

  deletePublication(id: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http
      .delete(`${this.baseUrl}/api/publications${id}`, { headers })
      .pipe(
        tap((deletedPublication: any) => {
          const currentState = this.publicationSubject.value;
          const updatedPublications = currentState.publication.filter(
            (item: any) => item.id !== id
          );
          this.publicationSubject.next({
            ...currentState,
            publications: updatedPublications,
          });
        })
      );
  }
}
