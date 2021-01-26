import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/homepage/home/home.component';
import { AboutComponent } from './components/about-page/about/about.component';
import { AuthGuard } from "./guards/auth.guard";


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/homepage/homepage.module').then(mod => mod.HomepageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./components/recipes/recipes.module').then(mod => mod.RecipesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./components/about-page/about-page.module').then(mod => mod.AboutPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
