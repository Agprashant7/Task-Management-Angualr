export class Task {
    id:number=0;
    task_name:string=''
    date:Date=new Date();
    dueDate:Date=new Date();
    status:string='Assigned';
    comment:string='';
    lastModified:Date=new Date()
}
