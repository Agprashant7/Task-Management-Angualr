import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/model/task';
import {format } from 'date-fns'


@Component({
    selector: 'app-todocard',
    templateUrl: './todocard.component.html',
    styleUrls: ['./todocard.component.css']
  })

  export class TodoCardCompnent{
   @Input()taskArray! :Task[]
   @Output()deleteObj:EventEmitter<any>=new EventEmitter()
   @Output()editObj:EventEmitter<any>=new EventEmitter()
  
  
   taskObj:Task=new Task();
   taskArr:Task[]=[]
   addTaskValue:string='';
   editTaskValue:string='';
   editDueDate!:Date | string;

   constructor(){
   }
  //  @Output() call=new EventEmitter();
  ngOnInit():void{
  }

  //ngOnChanges triggers following the modification of @Input bound class members. 
  //Data bound by the @Input() decorator come from an external source. When the external 
  //source alters that data in a detectable manner, it passes through the @Input property again.

  ngOnChanges(){

    this.taskArr=this.taskArray
  }

  deleteTask(task:Task){
    this.deleteObj.emit(task)
  }

  editTask(){
    console.log(this.taskObj)
    this.taskObj.taskName=this.editTaskValue
    this.taskObj.dueDate=this.editDueDate
    console.log(this.taskObj)
    this.editObj.emit(this.taskObj)
  }

  call(etask:Task){
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!',new Date(etask.dueDate).getFullYear())
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!',new Date(etask.dueDate).getMonth())
    const formatDate=`${new Date(etask.dueDate).getFullYear()}-${new Date(etask.dueDate).getMonth()}-${new Date(etask.dueDate).getDate()}`
    this.taskObj=etask
    this.editTaskValue=etask.taskName
    this.editDueDate=etask.dueDate
  }
  }