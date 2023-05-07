import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpeopleComponent } from './editpeople.component';

describe('EditpeopleComponent', () => {
  let component: EditpeopleComponent;
  let fixture: ComponentFixture<EditpeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditpeopleComponent]
    });
    fixture = TestBed.createComponent(EditpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
