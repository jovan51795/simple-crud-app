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
    return this.http.get<Blog[]>(`${environment.url}/blog`).pipe(
      tap((b: Blog[]) => {
        return b
      })
    )
  }

  setBlog = (b: Blog) => {
    return this.http.post(`${environment.url}/blog`, b).pipe(
      tap( b => b)
    )
  }
  editBlog = (blogData: Blog) => {
    return this.http.put(`${environment.url}/blog/${blogData.id}`, blogData).pipe(
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
    return this.http.delete(`${environment.url}/blog/${id}`).pipe(
      tap(x => x)
    )
  }


  // getBlog = () => {
  //   return this.blog;
  // }

  // setBook = (bookData: Blog) => {
  //   this.blog.push(bookData)
  // }

  // editBlog = (blogData: Blog) => {
  //  for(let x of this.blog) {
  //   if(x.id === blogData.id){
  //     x.title = blogData.title
  //     x.author = blogData.author
  //     x.description = blogData.description
  //     x.comments = blogData.comments
  //   }
  //  }

  //  console.log(this.blog)
   
   
  // }

  // delete(id: number){
  //   this.blog = this.blog.filter((x)=> x.id !== id)
  // }
  deleteAll = () => {
    this.blog = [];
    console.log(this.blog)
  }
}
