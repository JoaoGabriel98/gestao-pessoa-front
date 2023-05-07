import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListpeopleComponent } from './listpeople/listpeople.component';
import { CreatepeopleComponent } from './createpeople/createpeople.component';
import { EditpeopleComponent } from './editpeople/editpeople.component';

const routes: Routes = [
  {
    path: '', component: ListpeopleComponent
  },
  {
    path: 'people/new', component: CreatepeopleComponent
  },
  {
    path: 'people/edit/:id', component: EditpeopleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
