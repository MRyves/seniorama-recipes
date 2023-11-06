  import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
  import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
})
export class CreatePageComponent implements OnInit{

  constructor(private titleService: TitleService) {

  }


  ngOnInit() {
    this.titleService.setTitle("Erfasse ein neues Rezept")
  }

}
