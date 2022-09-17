import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blogs';
  users:any
  constructor(private userData:UserDataService)
  {
    userData.user().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    });
  }
}
