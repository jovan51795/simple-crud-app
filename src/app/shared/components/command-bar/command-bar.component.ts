import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit{
  routeSample =""
  name = 'Get Current Url Route Demo';
  @Output () deleteAllEmitter = new EventEmitter()
  constructor(private router: Router) { 
  }
  deleteAll = () => {
    this.deleteAllEmitter.emit();
  }

  ngOnInit(): void {
   
  }

  sample = () =>{
    var s: string[] =  this.router.url.split('/')
    return s[1];
  }

  
}
