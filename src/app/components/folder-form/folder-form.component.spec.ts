import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderFormComponent } from './folder-form.component';

describe('FolderFormComponent', () => {
  let component: FolderFormComponent;
  let fixture: ComponentFixture<FolderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
