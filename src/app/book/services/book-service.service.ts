import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { forkJoin, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  
  constructor(private http: HttpClient) { }

  book: Book[] = [
    {
      id: 1,
      name: "Angular tutorials",
      authors: [
        "jovanie",
        "cabatuan"
      ],
      isbn: 1234567810

    },
    {
      id: 2,
      name: "Java Zero to Hero",
      authors: [
        "jovanie",
        "cabatuan",
        "John",
        "jovanie",
        "cabatuan",
        "John"
      ],
      isbn: 1234567810

    },
    {
      id: 3,
      name: "React tutorials",
      authors: [
        "jovanie",
        "cabatuan"
      ],
      isbn: 1234567810
    },
    
   
  ];

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.url}/books`).pipe(
      tap(x => x)
    );
  }

  setBook = (b: Book) => {
    return this.http.post(`${environment.url}/books`, b).pipe(
      tap(a => a)
    )
  }

  editBook = (bookData: Book) => {
    return this.http.put(`${environment.url}/books/${bookData.id}`, bookData).pipe(
      tap( a => a)
    )
  }

  getEditBook = (id: number) => {
    return this.getBooks().pipe(
      map((x: Book[]) => {
        return x.filter( i => i.id === id)
      })
    )
  }
  delete (id: number) {
    return this.http.delete(`${environment.url}/books/${id}`).pipe(
      tap(a => a)
    )
  }

  // getBooks = () => {
  //   return this.book;
  // }
  // setBook = (bookData: Book) => {
  //   this.book.push(bookData)
  // }

  // editBook = (bookData: Book) => {
  //  for(let x of this.book) {
  //   if(x.id === bookData.id){
  //     x.name = bookData.name
  //     x.isbn = bookData.isbn
  //     x.authors = bookData.authors
  //   }
  //  }
  // }

  // delete(id: number){
  //   this.book = this.book.filter((x)=> x.id !== id)
  // // }
  // deleteAll (bookData: Book[]){
  //   for(let x of bookData) {
  //     this.delete(x.id).subscribe()
  //   }
  // }

    
    
}
