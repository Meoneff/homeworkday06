import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FriendshipService } from '../../services/friendship.service';
import { UserService } from '../../services/user.service';
import {
  concatAll,
  concatMap,
  from,
  map,
  merge,
  mergeAll,
  mergeMap,
  of,
  scan,
  switchMap,
  take,
  toArray,
} from 'rxjs';
import { Friendship } from 'src/models/friendship';
@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss'],
})
export class FriendListComponent {
  friendList: Array<Friendship> = [];

  @Output() selectedFriend: EventEmitter<Friendship> = new EventEmitter();

  constructor(
    public userService: UserService,
    public friendshipService: FriendshipService
  ) {
    this.userService.userInfo.subscribe((user) => {
      if (user == null) {
        return;
      }
      this.friendshipService.getFriendList(user?.email ?? '');
    });

    this.friendshipService.friendList.subscribe((friendship) => {
      if (friendship == null) {
        return;
      }
      if (
        !this.friendList
          .map((f) => f.friendEmail)
          .includes(friendship.friendEmail)
      ) {
        this.friendList.push(friendship);
      }
    });
  }

  chatWith(friendship: Friendship) {
    console.log(friendship);
    this.selectedFriend.emit(friendship);
  }
}
