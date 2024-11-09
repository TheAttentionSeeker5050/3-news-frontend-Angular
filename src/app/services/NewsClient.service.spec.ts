/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsClientService } from './NewsClient.service';

describe('Service: NewsClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsClientService]
    });
  });

  it('should ...', inject([NewsClientService], (service: NewsClientService) => {
    expect(service).toBeTruthy();
  }));
});
