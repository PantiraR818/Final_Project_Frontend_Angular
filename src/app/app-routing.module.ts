import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProductComponent } from './components/pages/new-product/new-product.component';
import { ProductComponent } from './components/pages/product/product.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AccountUserComponent } from './components/pages/account-user/account-user.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { ExchangeComponent } from './components/pages/exchange/exchange.component';
import { MainComponent } from './components/pages/main/main.component';
import { AuthGuard } from './guard/auth.guard';
import { SelectproComponent } from './components/pages/selectpro/selectpro.component';


const routes: Routes = [
    { path: "", component: MainComponent },
    // { path: "", component: MainComponent },
     { path: "product",  component: ProductComponent, canActivate: [ AuthGuard ] },
    // { path: "product/detail/:id", component: ProductDetailComponent },
    { path: "product/new", component: NewProductComponent, canActivate: [ AuthGuard ] },
    // { path: "product/edit/:id", component: EditProductComponent }
    {path : "login",component:LoginComponent },
    {path : "register",component:RegisterComponent },
    {path : "accountuser/edit/:id",component:AccountUserComponent, canActivate: [ AuthGuard ] },
    {path : "menu/:name",component:MenuComponent, canActivate: [ AuthGuard ] },
    {path : "product/edit/:id",component:EditProductComponent, canActivate: [ AuthGuard ] },
    {path : "exchange",component:ExchangeComponent , canActivate: [ AuthGuard ]},
    {path : "selectpro/:id",component:SelectproComponent , canActivate: [ AuthGuard ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
