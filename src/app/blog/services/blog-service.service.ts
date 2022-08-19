import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http: HttpClient) { }

  blog: Blog[] = [
    {
      id: 1,
      title: "The WOrld War III",
      description: "Test Description",
      author: "jovanie",
      comments: [
        "Good",
        "Bad"
      ]
    },
    {
      id: 2,
      title: "The WOrld War III",
      description: "Test Description",
      author: "jovanie",
      comments: [
        "Good",
        "Bad"
      ]
    }
  ]

  getBlog(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.url}/blogs`).pipe(
      tap((b: Blog[]) => {
        return b
      })
    )
  }

  setBlog = (b: Blog) => {
    return this.http.post(`${environment.url}/blogs`, b).pipe(
      tap( b => b)
    )
  }
  editBlog = (blogData: Blog) => {
    return this.http.put(`${environment.url}/blogs/${blogData.id}`, blogData).pipe(
      tap(x => x)
    )
  }
  getEditBlog = (id: number) => {
    return this.getBlog().pipe(
      map((x: Blog[]) => {
        return x.filter( i => i.id === id)
        
      })
    )
  }

  delete =(id: number) => {
    return this.http.delete(`${environment.url}/blogs/${id}`).pipe(
      tap(x => x)
    )
  }

  deleteAll = () => {
    this.blog = [];
    console.log(this.blog)
  }
}
