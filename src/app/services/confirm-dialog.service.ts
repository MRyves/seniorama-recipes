import { Injectable } from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {ConfirmDialogComponent} from "../components/ui/confim-dialog/confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: Dialog) { }

  confirm(text: string, confirmButtonText: string, cancelButtonText?: string){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {text, confirmButtonText, cancelButtonText}
    });

    return dialogRef.closed;
  }

}
