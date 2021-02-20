import { Component, OnInit } from '@angular/core';
import Task from 'src/app/entities/Task';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  selector: 'app-done-tasks',
  templateUrl: './done-tasks.component.html',
  styleUrls: ['./done-tasks.component.css']
})
export class DoneTasksComponent implements OnInit {

  public doneTasks: Task[]
  fakeLoading: boolean;
  constructor(private refService: ReferencesService) {
    this.fakeLoading = false;
    this.doneTasks = []
   }

  ngOnInit(): void {
    this.doneTasks = this.refService.getDataRef().filter(task=>{
      return task.done==true
    })
    //Simular llamada al servidor
    setTimeout(()=>{
      this.fakeLoading = true;
    },1000)
  }

}
