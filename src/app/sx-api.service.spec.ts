import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { SxApiService } from './sx-api.service';

describe('SxApiService', () => {
  let service: SxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],

    });
    service = TestBed.inject(SxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call sxPost', () => {
    spyOn(service, 'sxPost').and.returnValue(of([]))
    service.sxPost('1', '1').subscribe(r => {
      expect(r).toEqual([]);
    });

  });
});
