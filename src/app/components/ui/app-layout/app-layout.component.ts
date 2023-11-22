import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output
} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {TitleService} from "../../../services/title.service";
import User from "../../../models/User.model";

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent implements OnDestroy {

  @Input()
  user: User | null = null;

  @Output()
  logoutClick = new EventEmitter<never>();

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
