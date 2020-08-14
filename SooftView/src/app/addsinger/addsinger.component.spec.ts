import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsingerComponent } from './addsinger.component';

describe('AddsingerComponent', () => {
  let component: AddsingerComponent;
  let fixture: ComponentFixture<AddsingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
