import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { GenerateModalDirective } from 'src/app/directives/generate-modal.directive';
import Task from 'src/app/entities/Task';
import { ReferencesService } from 'src/app/services/references.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-container-tasks',
  templateUrl: './container-tasks.component.html',
  styleUrls: ['./container-tasks.component.css']
})
export class ContainerTasksComponent implements OnInit {

  fakeTasks: Task[];
  taskToDelete: Task;
  fakeRequest: boolean;
  //Vamos a obtener ref del container
  @ViewChild(GenerateModalDirective, {static:true}) generateModal: GenerateModalDirective;
  public containerRef: ViewContainerRef;
  constructor(private taskService: TaskService, private refServices: ReferencesService) {
    this.fakeRequest = false;
  }

  ngOnInit(): void {

    //Simulación de una llamada al servidor
    setTimeout(()=>{
      this.fakeRequest = true;
      this.fakeTasks = this.refServices.getDataRef()
      // this.containerRef = this.generateModal.vc;
      // this.refServices.setVContainer(this.containerRef);
    },500)
  }
  selectTask(item: Task){
    this.taskToDelete = item
  }


}
