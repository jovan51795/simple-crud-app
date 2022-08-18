import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, interval, map, Subscription } from 'rxjs';
import { Book } from '../../models/book';
import {BookServiceService} from '../../services/book-service.service'



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  sub: Subscription | undefined
  books: Book[] = [];
  constructor(private bookService: BookServiceService) { 
    this.sub = this.bookService.getBooks().subscribe(x => {
      this.books = x
    });
  }

  ngOnInit(): void {
  }
  
  action(id: number){
    forkJoin([this.bookService.delete(id), this.bookService.getBooks()]).pipe(
      map(([f , s]) => {
        console.log(f, "all books")
        this.books = s
      })).subscribe()
  }
 
  deleteAllBook = () => {
    for(let x of this.books) {
      this.action(x.id)
    }
  }
  ngOnDestroy(): void {
      this.sub?.unsubscribe()
  }

}
