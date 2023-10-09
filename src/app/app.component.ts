import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themeMode = 'light';
  items: MenuItem[] | null = null;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-sun',
        command: () => {
          this.changeTheme('lara-light-blue');
        }
      },
      {
        icon: 'pi pi-moon',
        command: () => {
          this.changeTheme('lara-dark-blue');
        }
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
