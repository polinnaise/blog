import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../posts/post.model';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string;
  
  constructor(private http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.baseUrl = baseUrl ? baseUrl : '';
  }

  getAllPosts(): Observable<Array<Post>> {
    let url = this.baseUrl + '/posts';
    return this.http.get<Array<Post>>(url);
  }

  getPost(id: number): Observable<Post> {
    let url = `${this.baseUrl}/posts/${id}`;
    return this.http.get<Post>(url);
  }

  addPost(post: Post): Observable<Object> {
    let url = this.baseUrl + '/posts';

    let options = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post(url, JSON.stringify(post), options);
  }

}
