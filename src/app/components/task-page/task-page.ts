import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmSync } from '../confirm-sync/confirm-sync';
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-task-page',
  imports: [MatButtonModule, CommonModule, FormsModule, MatSlideToggleModule, MatProgressBarModule],
  templateUrl: './task-page.html',
  styleUrl: './task-page.css',
})
export class TaskPage {
  todayDate: any;
  taskList: any = [];
  completionStatus: any;

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) {
    this.todayDate = new Date();
    this.todayDate = moment(this.todayDate).format('LL');
    this.taskList = [{
      taskName: 'Task 1',
      taskStatus: 'pending'
    }, {
      taskName: 'Task 2',
      taskStatus: 'completed'
    }];
    this.taskCompletionStatus();
  }

  taskStatusChange(task: any) {
    if (task.taskStatus == 'completed') {
      task.taskStatus = 'pending';
    } else if (task.taskStatus == 'pending') {
      task.taskStatus = 'completed';
    } else {
      task.taskStatus = 'pending';
    }
    this.taskCompletionStatus();
  }

  taskCompletionStatus() {
    let totalCount: number = this.taskList.length;
    let completedCount: number = (this.taskList.filter((item: any) => (item.taskStatus === 'completed'))).length;
    this.completionStatus = Number(completedCount / totalCount) * 100;
    return (this.completionStatus).toString();
  }

  progressBarClass() {

  }

  triggerSyncUp() {
    const dialogRef = this.dialog.open(ConfirmSync);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("User confirmed sync");
      } else {
        console.log("User cancelled");
      }
    });
  }

  addTask() {
    const dialogRef = this.dialog.open(AddTask);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        let tempoObject = {
          taskName: result,
          taskStatus: 'pending'
        }
        this.taskList.push(tempoObject);
        this.cd.detectChanges();
      } else {
        console.log("User cancelled");
      }
    });
  }
}
