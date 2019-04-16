import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/core/services/authen.service';
import { LoggedInUser } from 'src/app/core/domain/loggedin.user';
import { SystemConstants } from 'src/app/core/common/system.constant';
import { UrlConstants } from 'src/app/core/common/url.constant';
import { UtilityService } from 'src/app/core/services/utility.service';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public user: LoggedInUser;
  constructor(private authenService: AuthenService, private utilityService: UtilityService) { }

  ngOnInit() {
    this.user = this.authenService.getLoggedInUser();
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
    this.utilityService.navigate(UrlConstants.LOGIN);
  }
}
