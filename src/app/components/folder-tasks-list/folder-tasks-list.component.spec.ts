import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTasksListComponent } from './folder-tasks-list.component';

describe('FolderTasksListComponent', () => {
  let component: FolderTasksListComponent;
  let fixture: ComponentFixture<FolderTasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderTasksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
