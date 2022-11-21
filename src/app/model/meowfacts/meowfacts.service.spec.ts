import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MeowfactsService } from './meowfacts.service';

describe('MeowfactsService', () => {
  let service: MeowfactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MeowfactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
