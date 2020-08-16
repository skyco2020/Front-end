import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsingerComponent } from './detailsinger.component';

describe('DetailsingerComponent', () => {
  let component: DetailsingerComponent;
  let fixture: ComponentFixture<DetailsingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
