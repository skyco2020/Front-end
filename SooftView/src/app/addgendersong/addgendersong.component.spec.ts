import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgendersongComponent } from './addgendersong.component';

describe('AddgendersongComponent', () => {
  let component: AddgendersongComponent;
  let fixture: ComponentFixture<AddgendersongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgendersongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgendersongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
