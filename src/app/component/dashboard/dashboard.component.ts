import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { AuthService } from 'src/app/service/auth/auth.sevice';
import { CrudService } from 'src/app/service/crud/crud.service';
import { ToasterService, toastPayload } from '../../service/common/toaster.service';
import { IndividualConfig } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  taskObj:Task=new Task();
  taskArr:Task[]=[]
  addTaskValue:string='';
  addDueDate!:Date;
  editTaskValue:string='';
  toast!: toastPayload;

  constructor(private crudService:CrudService,private authService:AuthService,private toaster: ToasterService){
 
  }

  ngOnInit():void{
    this.taskObj=new Task();
    // this.taskArr=[];
    this.getAllTask();
    this.editTaskValue=''
  }
  showToaster(type: string,message:string,title:string) {
    this.toast = {
      message: message,
      title:title,
      type: type,
      ic: {
        timeOut: 2500,
        closeButton: true,
      } as IndividualConfig,
    };
    this.toaster.showToast(this.toast);
  }

  getAllTask(){
    this.crudService.getAllTask().subscribe((res:any)=>{
      this.taskArr=res.data;
    },err=>{
      console.log(err)
      if(err.status===401){
        this.showToaster('warning','Re Login Required','Session Expired')
      }
      else{
        this.showToaster('error','Something goes wrong..','Error')
      }
   
    })
  }
  addTask(){
    this.taskObj.taskName=this.addTaskValue;
    this.taskObj.dueDate=this.addDueDate;
    this.taskObj.date=new Date()
    this.crudService.addTasks(this.taskObj).subscribe(res=>{
       this.ngOnInit();
      this.addTaskValue=''
      this.addDueDate
    },err=>{
      if(err.status===401){
        this.showToaster('warning','Re Login Required','Session Expired')
      }
      else{
        this.showToaster('error',"Something goes wrong...",'Error')
      }
    })

  }

  editTask(taskObj:Task){
   
    // this.taskObj.task_name=this.editTaskValue
    this.crudService.editTask(taskObj).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      if(err.status===401){
        this.showToaster('warning','Re Login Required','Session Expired')
      }
      else{
        this.showToaster('error',err.error.name,'Error')
      }
    })
  }

  deleteTask(task:Task){
    this.taskObj=task
    // console.log(task)
    this.crudService.deleteTask(this.taskObj).subscribe(res=>{
      this.ngOnInit();
    },err=>{
      if(err.status===401){
        this.showToaster('warning','Re Login Required','Session Expired')
      }
      else{
        this.showToaster('error',err.error.name,'Error')
      }
    })
  }



 
}
