import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterAdminComponent } from './components/layout/admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './components/layout/admin/header-admin/header-admin.component';
import { FooterComponent } from './components/layout/base/footer/footer.component';
import { HeaderComponent } from './components/layout/base/header/header.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './page/admin/products/product-add/product-add.component';
import { ProductEditComponent } from './page/admin/products/product-edit/product-edit.component';
import { ProductListComponent } from './page/admin/products/product-list/product-list.component';
import { ContactComponent } from './page/base/contact/contact.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    DashboardComponent,
    HomePageComponent,
    PageNotFoundComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductEditComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
