import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'users', loadChildren: () => import('./users/users.module').then(x => x.UsersModule)},
    // otherwise redirect to home
  { path: '**', redirectTo: 'users' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
