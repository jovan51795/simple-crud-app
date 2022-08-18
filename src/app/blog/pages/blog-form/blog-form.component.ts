import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit, OnDestroy {

  blogFormGroup: FormGroup
  commentsFormArray: FormArray
  paramId: any
  blogItems: any
  sub: Subscription | undefined
  constructor(private fb: FormBuilder, private route: ActivatedRoute,  private blogService: BlogServiceService) { 
    this.paramId = this.route.snapshot.paramMap.get('id')
    
    

    this.blogFormGroup = this.fb.group({
      // id: [{value: this.blogItems[0].id, disabled: this.paramId === 'false'? false : true}],
      // title: [this.blogItems[0].title],
      // description: [this.blogItems[0].description],
      // author: [this.blogItems[0].author],
      // comments: this.fb.array([])


      id: [],
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([])
    })
    
    this.commentsFormArray = this.blogFormGroup.get('comments') as FormArray
    if(this.paramId === 'false'){
      this.blogItems = [{id: 0, title: '', description: '', author: '', comments: ['']}]
    }
    else {
      this.sub = this.blogService.getEditBlog(parseInt(this.paramId)).subscribe(data => {
        this.blogFormGroup.patchValue(data[0])
        for(let x of data[0].comments){
          this.commentsFormArray.push(new FormControl(x))
        }
      })

      
    }
    
  }

  ngOnInit(): void {
    
  }

  addComments = () => {
    this.commentsFormArray.push(new FormControl(''));
  }

  save = () => {
    const blogData = this.blogFormGroup.getRawValue() as Blog
    if(this.paramId === 'false'){
      return this.blogService.setBlog(blogData).subscribe()
    }
    return this.blogService.editBlog(blogData).subscribe()
  }

  deleteComment = (i: number) => {
    this.commentsFormArray.removeAt(i)
  }

  ngOnDestroy(): void {
      this.sub?.unsubscribe()
  }

}
