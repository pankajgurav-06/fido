import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http:HttpClient){}
  title = 'fido';
  form: any ={
    displayName: null,
    email: null
  }
  onUser(details: {email:any , username:any}){
    this.http.post('https://localhost:44326/pwmakeCredentialOptions',details)
    .subscribe((result)=>{
         console.warn("result",result)
       })
    console.log(details)
      }

  // onSubmit()
  // {
  //   this.http.post('https://localhost:44326/pwmakeCredentialOptions,this.form.displayName,this.form.displayName)
  //   .subscribe((result)=>{
  //     console.warn("result",result)
  //   })
  //   // console.log(this.form.displayName);
  //   // console.log(this.form.email);
    
  // }
}
