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
import { NewsPageComponent } from './page/base/news-page/news-page.component';
import { ProductPageComponent } from './page/base/product-page/product-page.component';
import { ProductDetailComponent } from './page/base/product-detail/product-detail.component';
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsPageComponent },
      { path: 'products', component: ProductPageComponent },
      { path: 'products/:id', component: ProductDetailComponent },
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
