import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

import { UpdateComponent } from './update/update.component';

import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [

    { path : 'products', component: HomeComponent},

    { path : 'products/:id/edit', component: UpdateComponent },


    { path : 'products/new', component: CreateComponent},

    { path : 'products/:id', component: DeleteComponent},

    // { path : 'movies/:id/review', component: NewreviewComponent},
    { path: '', pathMatch: 'full', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
