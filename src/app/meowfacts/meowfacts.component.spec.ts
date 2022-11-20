import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeowfactsComponent } from './meowfacts.component';

describe('MeowfactsComponent', () => {
  let component: MeowfactsComponent;
  let fixture: ComponentFixture<MeowfactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeowfactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeowfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
