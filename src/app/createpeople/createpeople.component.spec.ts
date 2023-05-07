import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepeopleComponent } from './createpeople.component';

describe('CreatepeopleComponent', () => {
  let component: CreatepeopleComponent;
  let fixture: ComponentFixture<CreatepeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatepeopleComponent]
    });
    fixture = TestBed.createComponent(CreatepeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
