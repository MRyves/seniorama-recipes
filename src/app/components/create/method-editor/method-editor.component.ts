import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Editor, Toolbar} from "ngx-editor";
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
  toolbar: Toolbar = [
    // default value
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['format_clear'],
  ];

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
