import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output, ViewChild
} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {TitleService} from "../../../services/title.service";
import User from "../../../models/User.model";
import {AppState} from "../../../store/store";
import {Store} from "@ngrx/store";
import {fromFavorites} from "../../../store/favorites/favorites.reducer";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";

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

  @ViewChild('snav', {static: true})
  snavRef!: MatSidenav;

  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  title$ = this.titleService.currentTitle$;
  favorites = this.store.select(fromFavorites.selectAll);

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private titleService: TitleService, private store: Store<AppState>) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }

  clickOnSideNavLink() {
    if(this.mobileQuery.matches){
      this.snavRef.toggle();
    }
  }
}
