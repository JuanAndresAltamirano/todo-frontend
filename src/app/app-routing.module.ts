import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FolderListComponent } from './components/folder-list/folder-list.component';
import { FolderFormComponent } from './components/folder-form/folder-form.component';
import { FolderTasksListComponent } from './components/folder-tasks-list/folder-tasks-list.component';

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
  },
  {
    path: 'folder',
    component: FolderListComponent
  },
  {
    path: 'folder/create',
    component: FolderFormComponent
  },
  {
    path: 'folder/update/:id',
    component: FolderFormComponent
  },
  {
    path: 'folder/:id',
    component: FolderTasksListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
