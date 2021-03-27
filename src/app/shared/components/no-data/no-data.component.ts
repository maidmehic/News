import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.css']
})
export class NoDataComponent implements OnInit {

  @Input() isError: boolean;
  @Output() tryAgainEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onTryAgain() {
    this.tryAgainEvent.emit();
  }
}
