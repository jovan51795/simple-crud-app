import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  header = false
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      
  }

  logout = () => {
    localStorage.removeItem("token");
    this.router.navigate(['login'])
  }
}
