import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "";
  password: string = "";
  msg: string = "";
  constructor(@Inject(LoginService) private loginService:LoginService){

  }
  CheckLogin(){
    if(this.loginService.checkUnameAndPwd(this.username,this.password)==true){
      this.msg="Login Successful!!.....";
    }else{
      this.msg="Invakid Credentials.....";

    }
  }
}
