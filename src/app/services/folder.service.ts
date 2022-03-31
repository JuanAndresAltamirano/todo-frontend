import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Folder } from '../interfaces/Folder';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getFolders(): Observable<Folder[]>{
    return this.http.get<Folder[]>(`${this.BASE_URL}/folder`);
  }

  getFolder(id: number): Observable<Folder>{
    return this.http.get<Folder>(`${this.BASE_URL}/folder/${id}`);
  }

  createFolder(folder: Folder): Observable<Folder>{
    return this.http.post<Folder>(`${this.BASE_URL}/folder/create`, folder);
  }

  deleteFolder(id: number): Observable<Folder>{
    return this.http.delete<Folder>(`${this.BASE_URL}/folder/delete?id=${id}`);
  }
  updateFolder(id: number, folder: Folder): Observable<Folder>{
    return this.http.put<Folder>(`${this.BASE_URL}/folder/update?id=${id}`, folder);
  }


}
