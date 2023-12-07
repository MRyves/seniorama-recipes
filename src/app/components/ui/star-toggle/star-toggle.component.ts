import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-star-toggle',
  templateUrl: './star-toggle.component.html',
  styleUrls: ['./star-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarToggleComponent {

  @Input({required: true})
  checked = false;

  @Output()
  toggle = new EventEmitter<boolean>();


  onClick() {
    this.toggle.emit(!this.checked);
  }
}
