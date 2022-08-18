import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, map, Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
  blogs: Blog[] = []
  sub: Subscription | undefined
  constructor( private blogService: BlogServiceService) { 
    this.sub = blogService.getBlog().subscribe(d => {
      this.blogs = d
    });
  }

  ngOnInit(): void {
  }
  action(id: number){
    this.sub = forkJoin([this.blogService.delete(id), this.blogService.getBlog()]).pipe(
    map(([first , second]) => {
      this.blogs = second
    })).subscribe()
  }

  deleteAllBlog = () => {
    for(let x of this.blogs) {
      this.action(x.id)
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
