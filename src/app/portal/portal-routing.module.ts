import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const portalRoutes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.component').then(m => m.RegisterComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(portalRoutes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {}
