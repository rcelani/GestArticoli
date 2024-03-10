import { TestBed } from '@angular/core/testing';

import { ArticleFormServiceService } from './article-form-service.service';

describe('ArticleFormServiceService', () => {
  let service: ArticleFormServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleFormServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
