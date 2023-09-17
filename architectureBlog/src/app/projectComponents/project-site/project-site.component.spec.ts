import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSiteComponent } from './project-site.component';

describe('ProjectSiteComponent', () => {
  let component: ProjectSiteComponent;
  let fixture: ComponentFixture<ProjectSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
