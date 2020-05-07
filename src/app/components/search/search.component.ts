import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mva-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search_results: any;

  constructor(
    private service: MoviesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .subscribe(qPrm => {
        let q = qPrm['s'];
        this.service.searchMovies(q)
          .subscribe(res => this.search_results = res)
      })
  }
}
