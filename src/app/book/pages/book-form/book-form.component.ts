import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookServiceService } from '../../services/book-service.service';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnDestroy {

  bookItems: Book[] = [];
  bookFormGroup: FormGroup;
  authorsFormArray: FormArray;
  paramId: any;
  sub: Subscription | undefined

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private books: BookServiceService) {
    this.paramId = this.route.snapshot.paramMap.get('id')
    this.bookFormGroup = this.fb.group({
      id: [],
      name: [],
      authors: this.fb.array([]),
      isbn: []
    })
    this.authorsFormArray = this.bookFormGroup.get("authors") as FormArray
    if(this.paramId === 'false') {
      this.bookItems = [{id: 0,name: '',isbn: 0,authors: ['']}]
    }else {
      this.sub = books.getEditBook(parseInt(this.paramId)).subscribe(data => {
        this.bookFormGroup.patchValue(data[0])
        for(let x of data[0].authors) {
          this.authorsFormArray.push(new FormControl(x))
        }
      })
    }
   }

  ngOnInit(): void {
  }

  addAuthor = () => {
    this.authorsFormArray.push(new FormControl(''));
  }
  deleteAuthor = (i: number) => {
    this.authorsFormArray.removeAt(i)
  }

  submit = () => {
    const bookData = this.bookFormGroup.getRawValue() as Book
    if(this.paramId === 'false'){
      return this.books.setBook(bookData).subscribe()
    }
    return this.books.editBook(bookData).subscribe()
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe()
  }

}
