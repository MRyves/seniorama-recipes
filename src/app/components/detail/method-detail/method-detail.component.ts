import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import RecipeModel from "../../../models/Recipe.model";

@Component({
  selector: 'app-method-detail',
  templateUrl: './method-detail.component.html',
  styleUrls: ['./method-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodDetailComponent {

  @Input()
  disableEdit = false;

  @Input({required: true})
  methodHtml: string = "";

  @Output()
  methodChanged = new EventEmitter<string>()

  editMode = false;
  methodHtmlEdit = this.methodHtml

  updateMethod(changes: Partial<RecipeModel>) {
    if (changes.method) {
      this.methodHtmlEdit = changes.method;
    }
  }

  startEdit() {
    if (!this.disableEdit) {
      this.methodHtmlEdit = this.methodHtml;
      this.editMode = true;
    }
  }

  saveEdit() {
    if (!this.disableEdit) {
      this.methodChanged.emit(this.methodHtmlEdit);
      this.methodHtml = this.methodHtmlEdit;
      this.editMode = false;
    }
  }

  cancelEdit() {
    this.methodHtmlEdit = this.methodHtml;
    this.editMode = false;
  }
}
