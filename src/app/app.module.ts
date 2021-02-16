import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContainerTasksComponent } from './components/container-tasks/container-tasks.component';
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './services/task.service';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { GenerateModalDirective } from './directives/generate-modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerTasksComponent,
    TaskComponent,
    ModalDeleteComponent,
    GenerateModalDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
