import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditor3Component } from './profile-editor3.component';

describe('ProfileEditor3Component', () => {
  let component: ProfileEditor3Component;
  let fixture: ComponentFixture<ProfileEditor3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditor3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
