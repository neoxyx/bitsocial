import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './portal/login/login.component';
import { PortalComponent } from './portal/portal.component';
import { HomeComponent } from './portal/home/home.component';
import { RegisterComponent } from './portal/register/register.component';
import { HeaderComponent } from './portal/home/header/header.component';
import { NavsComponent } from './portal/home/navs/navs.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortalComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    NavsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
