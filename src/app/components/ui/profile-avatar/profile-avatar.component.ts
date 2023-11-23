import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

const imageNames = [
  'angry',
  'colette',
  'remy',
  'gusto',
  'linguini',
  'brother'
];

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileAvatarComponent implements OnInit {
  imgSource: string = '';
  random = imageNames[Math.floor(Math.random()*imageNames.length)];

  constructor() {
  }
  ngOnInit(): void {
    this.imgSource = `/assets/avatars/${this.random}.png`;
  }


}
