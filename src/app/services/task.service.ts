import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.BASE_URL}/task`);
  }

  getTask(id: number): Observable<Task>{
    return this.http.get<Task>(`${this.BASE_URL}/task/${id}`);
  }

  createTask(task: Task): Observable<Task>{
    return this.http.post<Task>(`${this.BASE_URL}/task/create`, task);
  }

  deleteTask(id: number): Observable<Task>{
    return this.http.delete<Task>(`${this.BASE_URL}/task/delete?id=${id}`);
  }
  updateTask(id: number, task: Task): Observable<Task>{
    return this.http.put<Task>(`${this.BASE_URL}/task/update?id=${id}`, task);
  }

}
