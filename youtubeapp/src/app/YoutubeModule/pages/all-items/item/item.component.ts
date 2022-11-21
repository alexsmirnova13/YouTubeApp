import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title: string = '';

  @Input() frontImg: string = '';

  @Input() viewCount: string = '';

  @Input() likeCount: string = '';

  @Input() channelTitle: string = '';

  @Input() specialClass: string = '';

  @Input() date: string = '';

  @Input() id: string = '';
}
