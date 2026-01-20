import { Component } from '@angular/core';
import { ButtonHomeComponent } from '../../button-home/button-home.component';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonHomeComponent],
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
