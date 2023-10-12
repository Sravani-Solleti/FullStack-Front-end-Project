import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  img1="http://wallpapercave.com/wp/P7fo0Ks.jpg"
  constructor(private route:Router){}
  username:any;
  password:any;
  user:any;
  login()
  {
    if(this.password=="12345" && this.username!=null){
      this.user={
        "uname":this.username,
        "pwd":this.password

      }
      this.route.navigateByUrl('/home')
      localStorage.setItem('loggedinuser',JSON.stringify(this.user));
    }
    else{
      alert("Wrong Credentials")
    }
  }

}
