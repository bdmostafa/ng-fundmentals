import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  port = window.location.port;
  public testId = "inputId"

  public textSuccess = 'blue';
  public isDanger = false;

  public timeStamp = '';

  public now = Date.now();

  public money = 99.4356745;

  public name = '';
  public templateRefText = '';

  public toggle = false;

  public color = 'green';

  public list = ["Banana", "Mango", "Pineapple"];

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter;
  @Output() newItemEvent = new EventEmitter<string>();

  public msgStyles = {
    fontSize: '40px',
    textDecoration: 'underline'
  }

  showEvent(e) {
    this.timeStamp = e.timeStamp;
  }

  showTempRefVal(e) {
    this.templateRefText = e;
  }

  sendChildData() {
    this.childEvent.emit("message from child")
  }

  addNewItems(value: string) {
    this.newItemEvent.emit(value);
  }

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }

  constructor() { }

  ngOnInit(): void {
  }

}
