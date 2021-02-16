import { Component, ComponentFactory, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { GenerateModalDirective } from 'src/app/directives/generate-modal.directive';
import Task from 'src/app/entities/Task';
import { ReferencesService } from 'src/app/services/references.service';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() refContainerParent: ViewContainerRef;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  showModal(){
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalDeleteComponent);
    // const viewContainerRef = this.generateM.vc
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent<ModalDeleteComponent>(componentFactory);
    const cFactory = this.componentFactoryResolver.resolveComponentFactory(ModalDeleteComponent);
    this.refContainerParent.clear();
    const componentRef = this.refContainerParent.createComponent<ModalDeleteComponent>(cFactory);
    //Si quiero pasar datos
    componentRef.instance.taskToDelete = this.task;
  }
}
