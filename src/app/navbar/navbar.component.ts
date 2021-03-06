import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(
    private loginService: LoginService,
    private translateService: TranslateService
  ) {}

  onTranslate(lang: string): void {
    localStorage.setItem('md-lang', lang);
    this.translateService.use(lang);
  }
}
