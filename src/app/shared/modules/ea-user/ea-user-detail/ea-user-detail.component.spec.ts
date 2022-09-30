import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaUserDetailComponent } from './ea-user-detail.component';

describe('EaUserDetailComponent', () => {
  let component: EaUserDetailComponent;
  let fixture: ComponentFixture<EaUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaUserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
