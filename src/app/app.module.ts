import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatCardModule} from '@angular/material/card'
import { HeaderComponent } from './shared/components/header/header.component';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth-components/register/register.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth-components/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { NotfoundComponent } from './auth-components/notfound/notfound.component';
import { ToastrModule } from 'ngx-toastr';

// import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';

// import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    LayoutComponent,
    NotfoundComponent
    // CommandBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    // MatButtonModule
    
    HttpClientModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
