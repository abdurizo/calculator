import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathOperationsComponent } from './math-operations/math-operations.component';
import { CounterComponent } from './counter/counter.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MathOperationsComponent, CounterComponent, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lesson-1';
}
