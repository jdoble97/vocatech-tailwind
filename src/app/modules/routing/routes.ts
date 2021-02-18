import {Routes} from '@angular/router';
import { AddTaskComponent } from 'src/app/components/add-task/add-task.component';
import { ContainerTasksComponent } from 'src/app/components/container-tasks/container-tasks.component';
import { DoneTasksComponent } from 'src/app/components/done-tasks/done-tasks.component';

export const routes: Routes = [
    {path: 'tasks', component: ContainerTasksComponent},
    {path: 'add', component:AddTaskComponent},
    {path:'done-tasks',component:DoneTasksComponent},
    {path:'', redirectTo:'/tasks',pathMatch:'full'}
]