import { Injectable, ViewContainerRef } from '@angular/core';
import Task from '../entities/Task';
import {data} from '../fakeData/data'

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  public vContainerRef: ViewContainerRef;
  public dataFake: Task[]
  constructor() { 
    this.dataFake = data;
  }

  setVContainer(containerRef: ViewContainerRef){
    this.vContainerRef = containerRef;
  }

  getVContainer(){
    return this.vContainerRef;
  }
  clearContainer(){
    this.vContainerRef.clear()
  }

  getDataRef(){
    return this.dataFake;
  }
  deleteData(taskToDelete: Task){
    this.dataFake.splice(this.dataFake.indexOf(taskToDelete),1)
  }
  addTask(task: Task){
    this.dataFake.push(task)
  }
}
