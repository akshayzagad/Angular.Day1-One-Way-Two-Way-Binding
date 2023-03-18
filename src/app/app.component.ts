import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
imgUrl= "https://media.licdn.com/dms/image/C510BAQEYyeT3P0H_mw/company-logo_200_200/0/1555572153465?e=2147483647&v=beta&t=m5dV743FK6dGl23C72CA3U1CSWjhJlMfQYbUs-cOe-k"
url = "http://www.bridgelabz.com";
userName: string = "";
nameError: string = "";

ngOnInit(): void {
  this.title = "Hello From Bridzlabz"
}
onClick($event: any){
  console.log("Save button is clicked!",$event);
  window.open(this.url,"_blank")
}
onInput($event: any){
  console.log("Change Event Occurred", $event.declarations);
  const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if(nameRegex.test(this.userName)){
    this.nameError="";
    return;
  }
  this.nameError = "Name is Incorrect!"
}
}
