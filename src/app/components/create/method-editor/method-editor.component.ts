import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Editor} from "ngx-editor";

@Component({
  selector: 'app-method-editor',
  templateUrl: './method-editor.component.html',
  styles: [
    ':host {display: block; height: 100%}'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MethodEditorComponent implements OnInit, OnDestroy{

  editor!: Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
