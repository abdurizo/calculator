import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  score: number;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: Student[] = [];
  name = '';
  score: number | null = null;
  /***
   */
  addStudent() {
    if (!this.name || this.score === null) return;
    this.students.push({
      name: this.name,
      score: this.score!,
    });
    this.name = '';
    this.score = null;
  }
  getColor(score: number): string {
    if (score >= 90) return 'green';
    else if (score >= 60) return 'yellow';
    else return 'red';
  }
}
