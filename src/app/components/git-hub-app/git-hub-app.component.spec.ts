import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubAppComponent } from './git-hub-app.component';

describe('GitHubAppComponent', () => {
  let component: GitHubAppComponent;
  let fixture: ComponentFixture<GitHubAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitHubAppComponent]
    });
    fixture = TestBed.createComponent(GitHubAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
