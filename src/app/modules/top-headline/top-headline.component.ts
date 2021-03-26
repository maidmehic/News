import { Component, OnInit } from '@angular/core';
import { TopHeadlineService } from './services/top-headline.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  constructor(private headlineService: TopHeadlineService) { }

  ngOnInit(): void {
    this.headlineService.getTopHeadlines().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
