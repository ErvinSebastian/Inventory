import { TestBed } from '@angular/core/testing';
import { TestItemsService } from './test-items.service';

describe('TestItemsService', () => {
  let service: TestItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
