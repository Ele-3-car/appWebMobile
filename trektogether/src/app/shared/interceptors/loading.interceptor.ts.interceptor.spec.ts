import { TestBed } from '@angular/core/testing';

import { LoadingInterceptorTsInterceptor } from './loading.interceptor.ts.interceptor';

describe('LoadingInterceptorTsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingInterceptorTsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadingInterceptorTsInterceptor = TestBed.inject(LoadingInterceptorTsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
