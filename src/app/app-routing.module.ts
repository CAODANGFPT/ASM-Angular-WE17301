import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [{ path: '', component: HomePageComponent }],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
