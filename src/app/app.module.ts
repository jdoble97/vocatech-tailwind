import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContainerTasksComponent } from './components/container-tasks/container-tasks.component';
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task.service';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { GenerateModalDirective } from './directives/generate-modal.directive';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { DoneTasksComponent } from './components/done-tasks/done-tasks.component';
import { RoutingModule } from './modules/routing/routing.module';
//Usando reactiveform
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerTasksComponent,
    TaskComponent,
    ModalDeleteComponent,
    GenerateModalDirective,
    AddTaskComponent,
    DoneTasksComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
