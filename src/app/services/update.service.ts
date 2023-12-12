import {Injectable} from "@angular/core";
import {SwUpdate, VersionReadyEvent} from "@angular/service-worker";
import {filter, switchMap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../components/ui/confim-dialog/confirm-dialog.component";

@Injectable({providedIn: 'root'})
export class PromptUpdateService {

  constructor(swUpdate: SwUpdate, private dialog: MatDialog) {
    swUpdate.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        switchMap(() => this.dialog.open(ConfirmDialogComponent, {
          data: {
            text: 'Es ist eine neue Version verfügbar. Bitte drücke auf "Aktualisieren"',
            confirmButtonText: 'Aktualisieren'
          }
        }).afterClosed())
      )
      .subscribe(result => {
        if (result) {
          // Reload the page to update to the latest version.
          document.location.reload();
        }
      });
  }

}
