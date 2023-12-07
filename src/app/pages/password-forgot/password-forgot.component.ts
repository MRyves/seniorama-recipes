import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {MatDialog} from "@angular/material/dialog";
import {ForgotDialogComponent} from "../../components/forgot-dialog/forgot-dialog.component";

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordForgotComponent implements OnInit {

  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  submitError?: string;

  constructor(private afa: AngularFireAuth, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.submitError = undefined;
  }

  async submit() {
    try {
      if (this.forgotForm.valid) {
        await this.afa.sendPasswordResetEmail(this.forgotForm.controls.email.value!);
        this.dialog.open(ForgotDialogComponent, {
          data: {email: this.forgotForm.controls.email.value},
          width: '600px',
        });
      }
    } catch (e) {
      console.error('Failed to send password reset email: ', e);
      this.submitError = "Fehler, bitte überprüfe deine E-Mail!";
    }
  }

}
