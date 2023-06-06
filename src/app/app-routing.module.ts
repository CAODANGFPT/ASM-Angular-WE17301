import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './page/admin/products/product-add/product-add.component';
import { ProductEditComponent } from './page/admin/products/product-edit/product-edit.component';
import { ProductListComponent } from './page/admin/products/product-list/product-list.component';
import { HomePageComponent } from './page/base/home-page/home-page.component';
import { ContactComponent } from './page/base/contact/contact.component';
import { SignupComponent } from './page/base/signup/signup.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { LoginComponent } from './page/base/login/login.component';
import { CartPageComponent } from './page/base/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'cart', component: CartPageComponent}
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/add', component: ProductAddComponent },
      { path: 'products/:id/edit', component: ProductEditComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
