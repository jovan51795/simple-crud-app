import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  header = false
  constructor(private autheService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      
  }

  logout = () => {
    localStorage.removeItem("token");
    this.router.navigate(['login'])
  }
}
