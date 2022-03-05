import { HostBinding, HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';


import { NewProductComponent } from './components/pages/new-product/new-product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductComponent } from './components/pages/product/product.component';

import { MainComponent } from './components/pages/main/main.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AccountUserComponent } from './components/pages/account-user/account-user.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { ExchangeComponent } from './components/pages/exchange/exchange.component';
import { SelectproComponent } from './components/pages/selectpro/selectpro.component';

// import { CommonModule } from '@angular/common'; 
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
// import { BrowserModule } from '@angular/platform-browser'; 
import {NgToastModule} from 'ng-angular-popup';
import { AuthInterceptor } from './helper/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    AccountUserComponent,
    NavigationComponent,
    MenuComponent,
    EditProductComponent,
    ExchangeComponent,
    MainComponent,
    SelectproComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
