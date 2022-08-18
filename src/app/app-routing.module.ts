import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { NotfoundComponent } from './auth-components/notfound/notfound.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "book",
        loadChildren: () => import('./book/book.module').then( b => b.BookModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./user/user.module').then(u => u.UserModule),
        canActivate: [AuthGuard],
        
      },
    ]
  },
  {
    path: "404",
    component: NotfoundComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
  // {
  //   path: "book",
  //   loadChildren: () => import('./book/book.module').then( b => b.BookModule)
  // },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./blog/blog.module').then( m => m.BlogModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./user/user.module').then(u => u.UserModule),
  //   canActivate: [AuthGuard],
    
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
