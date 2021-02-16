import { Injectable } from '@angular/core';
import {data} from '../fakeData/data'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  /* CRUD */
  constructor() { }

  //C
  CreateTask(){

  }
  //R
  GetOne(){

  }
  //R
  GetAll(){
    return data;
  }

  UpdateOne(){

  }

  //D
  DeleteOne(){

  }

}
