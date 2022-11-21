import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss'],
})
export class CreateButtonComponent {
  constructor(private router: Router) {}

  onCreateClick() {
    this.router.navigate(['/create']);
  }
}
