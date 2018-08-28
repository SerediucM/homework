import { TestBed, inject } from '@angular/core/testing';

import { ServerComponent } from './server.component'

describe('ApiConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerComponent]
    });
  });

  it('should be created', inject([ServerComponent], (service: ServerComponent) => {
    expect(service).toBeTruthy();
  }));
});