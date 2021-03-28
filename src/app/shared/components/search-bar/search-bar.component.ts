import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() searchTerm: string;
  @Input() placeholder: string;
  @Output() onSearchEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSearchBtnClick() {
    this.onSearchEvent.emit(this.searchTerm);
  }
}
