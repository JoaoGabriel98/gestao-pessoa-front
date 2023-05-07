import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpeopleComponent } from './listpeople.component';

describe('ListpeopleComponent', () => {
  let component: ListpeopleComponent;
  let fixture: ComponentFixture<ListpeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpeopleComponent]
    });
    fixture = TestBed.createComponent(ListpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
