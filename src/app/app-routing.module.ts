import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';


const routes: Routes = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'task',
    component: TaskListComponent
  },
  {
    path: 'task/create',
    component: TaskFormComponent
  },
  {
    path: 'task/update/:id',
    component: TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
