export class Task {
    taskId!:string;
    taskName:string=''
    date!: Date ;
    dueDate!:Date | string;
    status:string='Assigned';
    comment:string='';
    lastModified: Date | '' = "";
}
