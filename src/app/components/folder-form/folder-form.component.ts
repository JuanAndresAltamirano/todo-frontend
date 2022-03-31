import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/interfaces/Folder';
import { FolderService } from 'src/app/services/folder.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-folder-form',
  templateUrl: './folder-form.component.html',
  styleUrls: ['./folder-form.component.css']
})
export class FolderFormComponent implements OnInit {


  folder: Folder = {
    name: ''

  };

  update: boolean = false;

  constructor(
    private folderService: FolderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.folderService.getFolder(params['id'])
      .subscribe(
        res => {
          console.log(res);
          this.folder = res;
          this.update = true;
        }
      )
    }
  }

  submitFolder() {
    this.folderService.createFolder(this.folder)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/folder'])
      },
      err => console.log(err)
    )
  }

  updateFolder() {
    this.folderService.updateFolder(this.folder.id!, this.folder)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/folder'])
      },
      err => console.log(err)
    )
  }

}
