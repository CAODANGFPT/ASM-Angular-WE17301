import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: IUser[] = [];
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe(
      (data: any) => {
        this.users = data.data;
      },
      (error) => console.log(error)
    );
  }

}
