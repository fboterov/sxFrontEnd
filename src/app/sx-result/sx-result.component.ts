import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMember } from '../model';

@Component({
  selector: 'app-sx-result',
  templateUrl: './sx-result.component.html',
  styleUrls: ['./sx-result.component.scss']
})
export class SxResultComponent implements OnInit {
  data = {} as IMember[];

  constructor(private route: ActivatedRoute) {
    this.data = [];
    let tmp = this.route.snapshot.paramMap.get('data');
    if (tmp) {
      this.data = JSON.parse(tmp);
    }
  }

  ngOnInit(): void {
  }

}
