 import {Component, Input, Output, EventEmitter} from "@angular/core";

 @Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]


 })

 export class LoginComponent {
    @Input() headline
    @Output() onLogging = new EventEmitter()


    loggearse(){
       this.onLogging.emit()
    }

    checkEmail(email, message){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(String(email.target.value).toLowerCase()))
      {
         document.getElementById(message).style.display = "none";
      }
      else
      {
         document.getElementById(message).style.display = "block";
      }
    }

    passEmail(pass, message){
       
      if(pass.target.value.length > 6)
      {
         document.getElementById(message).style.display = "none";
      }else
      {
         document.getElementById(message).style.display = "block";
      }
    }

 }