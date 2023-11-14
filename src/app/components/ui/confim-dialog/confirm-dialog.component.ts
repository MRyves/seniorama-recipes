import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: [':host {display:block; padding: 8px 16px; background-color: white; border-radius: 5px;}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ConfirmDialogComponent {

  cancelButtonText: string;

  constructor(
    public dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) public data: {
      text: string,
      confirmButtonText: string,
      cancelButtonText?: string
    }) {
    this.cancelButtonText = data.cancelButtonText || "Abbrechen";
  }

  close(result: boolean) {
    this.dialogRef.close(result);
  }

}
