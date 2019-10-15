import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() outputText: EventEmitter<string> = new EventEmitter()
  text

  doChanges() {
    this.outputText.emit(this.text)
  }

}
