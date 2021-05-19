import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData{
  id:number;
  cutomer:string;
  items:number;
  amount:string;
  status:string;
}
@Component({
  selector: 'app-change-status-dialog',
  templateUrl: './change-status-dialog.component.html',
  styleUrls: ['./change-status-dialog.component.css']
})
export class ChangeStatusDialogComponent implements OnInit {
  selected 
  constructor(
    public dialogRef: MatDialogRef<ChangeStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
      if(this.data){
        this.selected = this.data.status
      }
  }
  updateStatus(){
    // let request = {id:this.data.id , status:this.selected}
    this.data.status = this.selected
    this.dialogRef.close(this.data)
  }

}
