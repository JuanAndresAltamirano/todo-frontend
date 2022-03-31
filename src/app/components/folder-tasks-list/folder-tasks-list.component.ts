import { Component, OnInit } from '@angular/core';

import { FolderService } from 'src/app/services/folder.service';

import { Folder } from 'src/app/interfaces/Folder';

@Component({
  selector: 'app-folder-tasks-list',
  templateUrl: './folder-tasks-list.component.html',
  styleUrls: ['./folder-tasks-list.component.css']
})
export class FolderTasksListComponent implements OnInit {

  folder: Folder = {
    name: '',
    tasks: []
  }


  constructor() { }

  ngOnInit(): void {
  }

}
