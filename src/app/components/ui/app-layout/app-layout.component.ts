import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {TitleService} from "../../../services/title.service";

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  title$ = this.titleService.currentTitle$;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private titleService: TitleService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }

}
