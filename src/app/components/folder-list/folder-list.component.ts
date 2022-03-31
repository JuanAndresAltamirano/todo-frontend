import { Component, OnInit } from '@angular/core';

import { FolderService } from 'src/app/services/folder.service';

import { Folder } from 'src/app/interfaces/Folder';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit {

  folder: Folder = {
    name: ''
  }

  folders: Folder[] = [];

  constructor(
    private folderService: FolderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFolders();
  }

  getFolders() {
    this.folderService.getFolders()
    .subscribe(
      res => {
        this.folders = res;
      },
      err => console.log(err)
    )
  }

  deleteFolder(id: number) {
    this.folderService.deleteFolder(id)
    .subscribe(
      res=>{
        this.getFolders();
      },
      err => console.log(err)
    )
  }

  submitFolder() {
    this.folderService.createFolder(this.folder)
    .subscribe(
      res => {
        console.log(res);
       // this.router.navigate(['/'])
       window.location.reload();
      },
      err => console.log(err)
    )
  }

}
