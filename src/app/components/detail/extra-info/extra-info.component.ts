import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-extra-info',
  templateUrl: './extra-info.component.html',
  styles: [
  ],
  host: {'class': 'mat-body-1'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtraInfoComponent {

  @Input()
  serveInfo?: string;

  @Input()
  commentInfo?: string;

  @Input()
  plateInfo?: string;

  @Input()
  timeInfo?: string;

}
