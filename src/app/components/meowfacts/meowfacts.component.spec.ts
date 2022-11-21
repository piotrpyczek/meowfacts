import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteListModule } from '../../common';

import { MeowfactsComponent } from './meowfacts.component';

describe('MeowfactsComponent', () => {
  let component: MeowfactsComponent;
  let fixture: ComponentFixture<MeowfactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeowfactsComponent],
      imports: [HttpClientModule, InfiniteListModule]
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
