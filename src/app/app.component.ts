import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { SpinnerModule } from '@coreui/angular';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `<div class="spinner-view"><div class="lds-ripple" *ngIf="(loader | async)"><div></div><div></div></div></div> <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, SpinnerModule, CommonModule]
})
export class AppComponent implements OnInit {
  title = 'CoreUI Angular Admin Template';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService,
    private loaderService: LoaderService
  ) {
    this.titleService.setTitle(this.title);
    // iconSet singleton
    this.iconSetService.icons = { ...iconSubset };
  }

  get loader(): Observable<boolean> {
    return this.loaderService.loader$;
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
