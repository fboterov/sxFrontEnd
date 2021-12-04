import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SxApiService } from '../sx-api.service';

@Component({
  selector: 'app-sx-search',
  templateUrl: './sx-search.component.html',
  styleUrls: ['./sx-search.component.scss']
})
export class SxSearchComponent implements OnInit {

  memberCardNumber: string = '';
  policyNumber: string = '';

  constructor(public sxApiService: SxApiService, private router: Router) { }

  ngOnInit(): void {
  }

  keyPressNumbers(event: any): boolean {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  isValidSearch(): boolean {
    return !(this.memberCardNumber.length > 0 || this.policyNumber.length > 0);
  }

  resetValues(): void {
    this.memberCardNumber = '';
    this.policyNumber = '';
  }

  SearchMember() {
    this.sxApiService.sxPost(this.memberCardNumber, this.policyNumber).subscribe(
      result => {
        this.router.navigate(['SearchResult', { data: JSON.stringify(result) }]);
      }, e => {
        console.log('not found')
      });
  }

  hasHistory(): boolean {
    return Object.keys(this.sxApiService.searchHistory).length > 0;
  }

  searchMemberHistory(key: string) {
    this.router.navigate(['SearchResult', { data: JSON.stringify(this.sxApiService.searchHistory[key]) }]);
  }
}
