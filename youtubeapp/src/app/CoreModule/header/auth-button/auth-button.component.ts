import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/AuthModule/service/master.service';
import { LoggedService } from '../../services/logged.service';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthButtonComponent implements OnInit, OnDestroy {
  constructor(
    private masterService: MasterService,
    private route: Router,
    private loggedService: LoggedService,
    private ref: ChangeDetectorRef,
  ) {}

  isLogged: boolean = false;

  ngOnInit(): void {
    this.isLogged = this.masterService.IsLoggedIn();
    this.loggedService.logged$.subscribe(() => this.onLoggedChange());
  }

  exit() {
    localStorage.clear();
    this.loggedService.changeLogged(this.masterService.IsLoggedIn());
    this.route.navigate(['auth']);
  }

  onLoggedChange() {
    this.isLogged = this.masterService.IsLoggedIn();
    this.ref.detectChanges();
  }

  ngOnDestroy(): void {
    this.loggedService.logged$.unsubscribe();
  }
}
