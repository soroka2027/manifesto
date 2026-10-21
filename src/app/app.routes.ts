import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manifest', component: HomeComponent }, // placeholder for now
  { path: 'behind-scenes', component: HomeComponent },
  { path: 'infospace', component: HomeComponent },
  { path: 'visualization', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
