import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataApiService: DataApiService, private authService: AuthService) { }

  private user :  UserInterface;

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.dataApiService.getProfile().subscribe(user => (
      localStorage.setItem("user", JSON.stringify(user))
      ));

      this.user = this.authService.getCurrentUser();
    
  }

}
