import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailComponent } from './user-email.component';

describe('UserEmailComponent', () => {
  let component: UserEmailComponent;
  let fixture: ComponentFixture<UserEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEmailComponent]
    });
    fixture = TestBed.createComponent(UserEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
