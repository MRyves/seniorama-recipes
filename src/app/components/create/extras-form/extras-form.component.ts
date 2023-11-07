import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-extras-form',
  templateUrl: './extras-form.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtrasFormComponent {
  serveInput = new FormControl('');
  commentInput = new FormControl('');
  plateInput = new FormControl('');
  timeInput = new FormControl('');
}
