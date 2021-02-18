import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import Task from 'src/app/entities/Task';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  formTask: FormGroup;

  constructor(private refServices: ReferencesService, private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formTask = new FormGroup({
      description: new FormControl('', [
        Validators.required, Validators.minLength(5)
      ])
    })
  }

  submitTask() {
    let taskToInsert: Task = {...this.formTask.value, date: (new Date()).toDateString(), done: false}
    console.log('Tareas', taskToInsert);
    this.refServices.addTask(taskToInsert);
    this.router.navigate(['/tasks']);
  }
}
