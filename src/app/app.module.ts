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
import { ProductPageComponent } from './page/base/product-page/product-page.component';
import { ContactComponent } from './page/base/contact/contact.component';
import { HomePageComponent } from './page/base/home-page/home-page.component';
import { LoginComponent } from './page/base/login/login.component';
import { SignupComponent } from './page/base/signup/signup.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { NewsPageComponent } from './page/base/news-page/news-page.component';
import { ModelNewsComponent } from './components/model-news/model-news.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { ModelProductsOutstandingComponent } from './components/model-products-outstanding/model-products-outstanding.component';
import { ModelSupportComponent } from './components/model-support/model-support.component';
import { ModelMenuProductsComponent } from './components/model-menu-products/model-menu-products.component';

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
    LoginComponent,
    SignupComponent,
    ContactComponent,
    NewsPageComponent,
    ModelNewsComponent,
    AdvertisementComponent,
    ModelProductsOutstandingComponent,
    ModelSupportComponent,
    ModelMenuProductsComponent,
    ProductPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
