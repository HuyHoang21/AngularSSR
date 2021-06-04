import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEditComponent } from './users/add-edit.component';
const routes: Routes = [ 
  {path :'', component: HomeComponent},
  //{ path: 'users', loadChildren: () => import('./users/users.module').then(x => x.UsersModule)},
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent },
    // otherwise redirect to home
  { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
