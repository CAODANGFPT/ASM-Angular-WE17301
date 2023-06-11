import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) { }
  userInfo = this.authService.isAuthenticated();

  onHandleLogout(){
    localStorage.removeItem('userInfo');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
