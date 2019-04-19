import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTrainingComponent } from './self-training.component';

describe('SelfTrainingComponent', () => {
  let component: SelfTrainingComponent;
  let fixture: ComponentFixture<SelfTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
