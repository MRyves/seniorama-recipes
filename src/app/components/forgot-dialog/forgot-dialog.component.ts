import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-forgot-dialog',
  templateUrl: './forgot-dialog.component.html',
  styles: [':host {display:block; padding: 8px 16px; background-color: white; border-radius: 5px;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotDialogComponent {

  name: string = '';

  constructor(
    public dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: {
      email: string,
    }) {
    this.name = this.guessNameFromEmail(data.email);
  }

  private guessNameFromEmail(email: string) {
    if (!email) {
      return '';
    }

    if (email.includes('nicola') || email.includes('vanoni')) {
      return 'Nicola';
    }

    if (email.includes('maesch')) {
      return 'Beat';
    }

    if (email.includes('nongluck') || email.includes('perrenoud')) {
      return 'Jum';
    }

    if (email.includes('yogan')) {
      return 'Yogi';
    }

    if (email.includes('oliver') || email.includes('imhof')) {
      return 'Oliver';
    }

    if (email.includes('walid') || email.includes('werder')) {
      return 'Walid';
    }

    if (email.includes('yves')) {
      return 'Yves';
    }

    return '';
  }

  close() {
    this.dialogRef.close();
  }
}
