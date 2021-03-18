import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsSummaryComponent } from './logs-summary.component';

describe('LogsSummaryComponent', () => {
  let component: LogsSummaryComponent;
  let fixture: ComponentFixture<LogsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
