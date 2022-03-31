import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/interfaces/Task';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task: Task = {
    name: '',
    folderId: 0,
    isDone: false
  };

  

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks()
    .subscribe(
      res => {
        this.tasks = res;
      },
      err => console.log(err)
    )
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id)
    .subscribe(
      res=>{
        this.getTasks();
      },
      err => console.log(err)
    )
  }

  submitTask() {
    this.taskService.createTask(this.task)
    .subscribe(
      res => {
        console.log(res);
       // this.router.navigate(['/'])
       window.location.reload();
      },
      err => console.log(err)
    )
  }

  doneTask(id: number, task: Task) {
    this.taskService.updateTask(id, task)
    .subscribe(
      res => {
        this.task.isDone = true;
        console.log(this.task.isDone)
      },
      err => console.log(err)
    )
    console.log(this.task.isDone)

  }

  doneTask2(id: number, task: Task) {
      // if(task.isDone){
      //   task.isDone = false
      // }else{
      //   task.isDone = true
      // }
      task.isDone ? task.isDone=false : task.isDone=true
      this.taskService.updateTask(id, task)
      
      .subscribe(
        res => {
          console.log(res);
        },
        err=> console.log(err)
      )
  
  }

}
