import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-logo',
  templateUrl: './search-logo.component.html',
  styleUrls: ['./search-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLogoComponent {
  constructor(private router: Router) {}

  onLogoClick() {
    this.router.navigate(['searchResult']);
  }
}
