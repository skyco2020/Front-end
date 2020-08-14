import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListgenderComponent } from './listgender.component';

describe('ListgenderComponent', () => {
  let component: ListgenderComponent;
  let fixture: ComponentFixture<ListgenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListgenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListgenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
