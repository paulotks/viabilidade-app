import {Routes} from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {NewProjectComponent} from './views/new-project/new-project.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'novo-projeto', component: NewProjectComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
