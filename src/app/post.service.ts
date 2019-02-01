import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PostService {

    constructor(private http: HttpClient) { }

    public getPosts(): Observable<object[]> {
        //return this.http.get<object[]>(environment.envEndpoint + '/api/posts');
        return this.http.get<object[]>('http://localhost:8000/api/posts');
    }

    public getPost(id: number): Observable<object> {
        //return this.http.get<object>(environment.envEndpoint + '/api/posts/' + id);
        return this.http.get<object>('http://localhost:8000/api/posts/' + id);
    }
    
}
