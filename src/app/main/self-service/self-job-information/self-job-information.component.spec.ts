import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfJobInformationComponent } from './self-job-information.component';

describe('SelfJobInformationComponent', () => {
  let component: SelfJobInformationComponent;
  let fixture: ComponentFixture<SelfJobInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfJobInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfJobInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
