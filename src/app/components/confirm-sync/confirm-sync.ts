import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-sync',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './confirm-sync.html',
  styleUrl: './confirm-sync.css',
})
export class ConfirmSync {
  constructor(private dialogRef: MatDialogRef<ConfirmSync>) {}

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
