import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Editor} from "ngx-editor";
import RecipeModel from "../../../models/Recipe.model";

@Component({
  selector: 'app-method-editor',
  templateUrl: './method-editor.component.html',
  styles: [
    ':host {display: block; height: 100%}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodEditorComponent implements OnInit, OnDestroy{

  @Input()
  recipeMethod: string = '';

  @Output()
  recipeMethodChange = new EventEmitter<Partial<RecipeModel>>();

  editor!: Editor;
  html = '';


  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destroy the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  update($event: string) {
    this.recipeMethodChange.emit({method: $event})
  }
}
