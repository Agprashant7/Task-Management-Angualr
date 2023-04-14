import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { AuthService } from 'src/app/service/auth/auth.sevice';
import { CrudService } from 'src/app/service/crud/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  taskObj:Task=new Task();
  taskArr:Task[]=[]
  addTaskValue:string='';
  editTaskValue:string='';

  constructor(private crudService:CrudService,private authService:AuthService){
 
  }

  ngOnInit():void{
    this.taskObj=new Task();
    this.taskArr=[];
    this.getAllTask();
    this.editTaskValue=''
  }

  getAllTask(){
    this.crudService.getAllTask().subscribe(res=>{
      this.taskArr=res;
    },err=>{
      alert("UNABLE TO GET LIST")
    })
  }
  addTask(){
    this.taskObj.task_name=this.addTaskValue;
    this.crudService.addTasks(this.taskObj).subscribe(res=>{
      this.ngOnInit();
      this.addTaskValue=''
    },err=>{
      alert(err)
    })

  }

  editTask(){
    this.taskObj.task_name=this.editTaskValue
    this.crudService.editTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      alert("FAILDED TO EDIT")
    })
  }

  deleteTask(task:Task){
    this.taskObj=task
    // console.log(task)
    this.crudService.deleteTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      alert("FAILDED TO Delete")
    })
  }

  call(etask:Task){
    this.taskObj=etask
    this.editTaskValue=etask.task_name
  }

 
}
