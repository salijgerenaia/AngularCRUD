import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDashboardComponent } from './employe-dashboard.component';

describe('EmployeDashboardComponent', () => {
  let component: EmployeDashboardComponent;
  let fixture: ComponentFixture<EmployeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeDashboardComponent]
    });
    fixture = TestBed.createComponent(EmployeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
