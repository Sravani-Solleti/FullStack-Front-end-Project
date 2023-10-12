import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private route:Router){}
  username:any;
  user:any;
  
  ngOnInit(){
    if(localStorage.getItem("loggedinuser")==null){
      this.route.navigateByUrl('/')
    }
    else{
      this.user=localStorage.getItem("loggedinuser");
      this.user=JSON.parse(this.user);
      this.username=this.user.uname;

    }
  }
  logout(){
localStorage.removeItem('loggedinuser');
  }

}
