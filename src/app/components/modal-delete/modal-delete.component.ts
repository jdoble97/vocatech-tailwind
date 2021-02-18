import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/app/entities/Task';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  @Input() taskToDelete: Task;
  constructor(private refServices: ReferencesService, private refService: ReferencesService) { }

  ngOnInit(): void {
    console.log('La tarea a eliminar:', this.taskToDelete);

  }

  cancelDelete() {
    this.refServices.vContainerRef.clear();
  }
  deleteTask() {
    console.log('ELemento borrar', this.taskToDelete);
    this.refServices.deleteData(this.taskToDelete);
    this.refServices.clearContainer();
  }
}
