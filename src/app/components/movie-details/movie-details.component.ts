import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mva-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie_details: any;

  constructor(
    private service: MoviesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['imdbID'];
        this.service.getMovieDetails(id).subscribe(
          res => this.movie_details = res
        )
      }
    )
  }

  goBack() {
    window.history.back();
  }

}
