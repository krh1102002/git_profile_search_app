import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileDataComponent } from './github-profile-data.component';

describe('GithubProfileDataComponent', () => {
  let component: GithubProfileDataComponent;
  let fixture: ComponentFixture<GithubProfileDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubProfileDataComponent]
    });
    fixture = TestBed.createComponent(GithubProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
