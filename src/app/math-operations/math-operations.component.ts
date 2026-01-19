import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonHomeComponent } from '../button-home/button-home.component';

@Component({
  selector: 'app-math-operations',
  standalone: true,
  imports: [FormsModule,ButtonHomeComponent],
  templateUrl: './math-operations.component.html',
  styleUrl: './math-operations.component.css',
})
export class MathOperationsComponent {
  a: number = 0;
  b: number = 0;
  result!: number;
  isMultiplication() {
    this.result = this.a * this.b;
  }
  isDivision() {
    this.result = this.a / this.b;
  }
  isMinus() {
    this.result = this.a - this.b;
  }
  isPlus() {
    this.result = this.a + this.b;
  }
}
