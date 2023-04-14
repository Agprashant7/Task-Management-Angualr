import { Component, Input,Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.sevice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService:AuthService,private router:Router){}
  // @Input() logStatus:boolean=false; // decorate the property with @Input()
  @Output() countChanged=new EventEmitter();
  logStatus=this.authService.isLoggedIn()
  ngOnInit(){
    this.logStatus=this.authService.isLoggedIn()
  }
  ngDoCheck(){
    this.logStatus=this.authService.isLoggedIn()
  }

  onLogOut(){
    console.log("INSIDE LOG OUT")
    localStorage.clear()
    this.logStatus=this.authService.isLoggedIn()
    this.router.navigate(['/login'])
    
  }
}
