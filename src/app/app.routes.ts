import { Routes } from '@angular/router';
import { Todolist } from './pages/todolist/todolist';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'todolist',
  //   pathMatch: 'full',
  // },
  {
    path: 'todolist',
    component: Todolist,
  },
];
