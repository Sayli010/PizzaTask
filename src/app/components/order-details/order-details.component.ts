import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeStatusDialogComponent } from './change-status-dialog/change-status-dialog.component';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  dataSource = [
    {id:1,customer:"JOHNSON",items:2,amount:'Rs 330',status:'Preparing',
    item_name:[{pizza_type:'Veg Pizza',price:'Rs. 165',quantity:2}],total_price:'Rs 330',address:'Pune'},
    {id:2,customer:"HARDING",items:5,amount:'Rs 1515',status:'Ready to serve',
    item_name:[{pizza_type:'Non Veg Pizza',price:'Rs. 395',quantity:3},
    {pizza_type:'Veg Pizza',price:'Rs. 165',quantity:2}],total_price:'Rs 1515',address:'Shivaji Nagar'},
    {id:3,customer:"TAFT",items:1,amount:'Rs 165',status:'Order Received',
    item_name:[{pizza_type:'Veg Pizza',price:'Rs. 165',quantity:1}],total_price:'Rs 165',address:''},
    {id:4,customer:"HOOVER",items:4,amount:'Rs 1120',status:'Preparing',
    item_name:[{pizza_type:'Non Veg Pizza',price:'Rs. 395',quantity:2},
    {pizza_type:'Veg Pizza',price:'Rs. 165',quantity:2}],total_price:'Rs 1120',address:''},
    // {id:5,customer:"LINCOLN",items:2,amount:'Rs 350',status:'Order Received',
    // item_name:[],total_price:'',address:''},
    // {id:6,customer:"GARFIELD",items:5,amount:'Rs 1550',status:'Ready to serve',
    // item_name:[],total_price:'',address:''},
    // {id:7,customer:"POLK",items:3,amount:'Rs 550',status:'Preparing',
    // item_name:[],total_price:'',address:''},
    // {id:8,customer:"GRANT",items:6,amount:'Rs 3250',status:'Ready to serve',
    // item_name:[],total_price:'',address:''},
    // {id:9,customer:"JACKSON",items:1,amount:'Rs 150',status:'Preparing',
    // item_name:[],total_price:'',address:''},
    // {id:10,customer:"WASHINGTON",items:3,amount:'Rs 1250',status:'Order Received',
    // item_name:[],total_price:'',address:''},
  ]
  displayedColumns = ['customer_name','no_of_items','total_amount','status','action']
  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }
  onChangeStatus(selectedOrder){
    const dialogRef = this.dialog.open(ChangeStatusDialogComponent, {
      width: '250px',
      data: selectedOrder
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        console.log(result)
      }
    });
  }
  nevigateToDetails(row){
    console.log(row)
    this.router.navigate(['/oder-details',row.id])
  }
}
