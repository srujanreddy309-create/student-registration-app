import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  studentName: string = '';
  email: string = '';
  course: string = '';
  message: string = '';

  submitForm() {
    this.message = 'Registration Successful!';
  }

  clearForm() {
    this.studentName = '';
    this.email = '';
    this.course = '';
    this.message = '';
  }
}
