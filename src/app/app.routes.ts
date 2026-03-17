import { Routes } from '@angular/router';
import { TaskPage } from './components/task-page/task-page';

export const routes: Routes = [
    {
        path: '',
        component: TaskPage,
        title: 'Todo'
    }
];
