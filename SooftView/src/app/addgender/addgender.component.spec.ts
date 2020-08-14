import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgenderComponent } from './addgender.component';

describe('AddgenderComponent', () => {
  let component: AddgenderComponent;
  let fixture: ComponentFixture<AddgenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
