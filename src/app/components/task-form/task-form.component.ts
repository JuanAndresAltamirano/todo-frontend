import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

 

  task: Task = {
    name: '',
    folderId: 0,
    isDone: false
  };

  update: boolean = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.taskService.getTask(params['id'])
      .subscribe(
        res => {
          console.log(res);
          this.task = res;
          this.update = true;
        }
      )
    }
  }

  submitTask() {
    this.taskService.createTask(this.task)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

}
