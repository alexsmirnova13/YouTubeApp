import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedService } from 'src/app/CoreModule/services/logged.service';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public loginForm!: FormGroup;

  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loggedService: LoggedService,
    private masterService: MasterService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}',
          ),
        ],
      ],
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onLogin(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      localStorage.setItem('username', JSON.stringify(this.loginForm.value));
      this.router.navigate(['searchResult']);
      this.loggedService.changeLogged(this.masterService.IsLoggedIn());
    }
  }
}
