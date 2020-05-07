import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mva-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryTerm: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(qPrm => this.queryTerm = qPrm['s'])
  }

  submitHandler(e) {
    e.preventDefault();
    this.router.navigate(['/search'], { queryParams: { s: this.queryTerm } });
  }

}
