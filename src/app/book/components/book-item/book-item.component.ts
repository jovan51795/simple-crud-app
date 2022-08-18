import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
 @Input() bookItem: Book | undefined;
 @Output() actionEmetter = new EventEmitter();
 panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  cardAction = (id: any) => {
    this.actionEmetter.emit(id)
  }

  // editBook = (id: number) => {
  //   console.log(id)
  // }
}
