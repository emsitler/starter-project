import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { SecondLayoutComponent } from './Layouts/second-layout/second-layout.component';
import { DiscogsDigsComponent } from './Layouts/discogs-digs/discogs-digs.component';
import { CareersPageComponent } from './Layouts/careers-page/careers-page.component';
import { ApiPageComponent } from './Layouts/api-page/api-page.component';
import { AddCompComponent } from './add-comp/add-comp.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [  
  {
    path: 'auth',
    component: AuthComponent
  } ,
  {
  path: '',
  component: HomeLayoutComponent
  },
  {
  path: 'admin',
  component: AddCompComponent
  },
  {
    path: 'SecondLayout',
    component: SecondLayoutComponent
  },
  {
    path: 'DiscogsDigs',
    component: DiscogsDigsComponent
  },
  {
    path: 'CareersPage',
    component: CareersPageComponent
  },
  {
    path: 'APIPage',
    component: ApiPageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }