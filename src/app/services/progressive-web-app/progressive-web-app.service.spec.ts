import { TestBed } from '@angular/core/testing';

import { ProgressiveWebAppService } from './progressive-web-app.service';

describe('ProgressiveWebAppService', () => {
  let service: ProgressiveWebAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressiveWebAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
