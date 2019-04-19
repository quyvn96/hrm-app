import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfPersonalComponent } from './self-personal.component';

describe('SelfPersonalComponent', () => {
  let component: SelfPersonalComponent;
  let fixture: ComponentFixture<SelfPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
