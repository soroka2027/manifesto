import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BehindScenesComponent } from './pages/behind-scenes/behind-scenes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manifest', component: HomeComponent }, // placeholder
  { path: 'behind-scenes', component: BehindScenesComponent },
  { path: 'infospace', component: HomeComponent },
  { path: 'visualization', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
