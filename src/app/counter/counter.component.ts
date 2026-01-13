import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  a: number = 0;
  incr() {
    this.a++;
  }
  decrm(){
    this.a--
  }
}
