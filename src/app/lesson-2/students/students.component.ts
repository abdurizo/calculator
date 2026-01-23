import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonHomeComponent } from '../../button-home/button-home.component';

interface Student {
  id: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonHomeComponent],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent {
  students: Student[] = [];
  name = '';
  score: number | null = null;
  private nextId: number = 1;
  /***
   */
  addStudent() {
    if (!this.name || this.score === null) return;
    this.students.push({
      id: this.nextId++,
      name: this.name,
      score: this.score!,
    });
    this.name = '';
    this.score = null;
  }
  deleteStudent(id: number) {
    this.students = this.students.filter((student) => student.id !== id);
  }
  getColor(score: number): string {
    if (score >= 90) return '#4cdb3ff1';
    else if (score >= 60) return '#f4f807b0';
    else return '#ff091d7e';
  }
}
