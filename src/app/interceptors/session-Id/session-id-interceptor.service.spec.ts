import { TestBed } from '@angular/core/testing';

import { sessionIdInterceptor } from './session-Id-interceptor';

describe('InterceptorService', () => {
  let service: sessionIdInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(sessionIdInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
