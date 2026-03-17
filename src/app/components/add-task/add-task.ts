import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [MatButtonModule, MatDialogModule, MatInputModule, CommonModule, FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})

export class AddTask {
  taskName = '';

  constructor(private dialogRef: MatDialogRef<AddTask>) { }

  save() {
    this.dialogRef.close(this.taskName);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
