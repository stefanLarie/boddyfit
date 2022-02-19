import { TestBed } from '@angular/core/testing';

import { ProgressSpinnerInterceptorService } from './progress-spinner-interceptor.service';

describe('InterceptorService', () => {
  let service: ProgressSpinnerInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressSpinnerInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
