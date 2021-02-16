import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTasksComponent } from './container-tasks.component';

describe('ContainerTasksComponent', () => {
  let component: ContainerTasksComponent;
  let fixture: ComponentFixture<ContainerTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
