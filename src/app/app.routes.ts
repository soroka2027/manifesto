import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BehindScenesComponent } from './pages/behind-scenes/behind-scenes.component';
import { AboutComponent } from './pages/about/about.component';
import { ManifestComponent } from './pages/manifest/manifest.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manifest', component: ManifestComponent },
  { path: 'behind-scenes', component: BehindScenesComponent },
  { path: 'infospace', component: HomeComponent },
  { path: 'visualization', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
