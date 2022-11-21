import { Directive, ElementRef, OnInit, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardStyle]',
})
export class CardStyleDirective implements OnInit {
  @Input() date: string = '';

  timestamp: number = 0;

  day: number = 1000 * 3600 * 24;

  week: number = this.day * 7;

  month: number = this.day * 30;

  sixMonth: number = this.day * 30 * 6;

  constructor(private el: ElementRef, private rendrer2: Renderer2) {}

  ngOnInit(): void {
    this.timestamp = +Date.now() - Date.parse(this.date);
    this.setCardStyle(this.timestamp);
  }

  setCardStyle(timestamp: number) {
    let color: string = 'black';
    if (timestamp <= this.week) {
      color = 'blue';
    } else if (timestamp <= this.month) {
      color = 'green';
    } else if (timestamp <= this.sixMonth) {
      color = 'yellow';
    } else if (timestamp > this.sixMonth) {
      color = 'red';
    }
    this.rendrer2.setStyle(this.el.nativeElement, 'borderBottom', `4px solid ${color}`);
  }
}
