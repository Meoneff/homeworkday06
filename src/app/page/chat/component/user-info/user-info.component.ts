import { Component, Input } from '@angular/core';
import { UserInfo } from 'src/models/user-info';
import { UserService } from '../../services/user.service';
import { FriendshipService } from '../../services/friendship.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
 @Input() user:UserInfo|null = {
  id: 'id-001',
  name: 'John Doe',
  email:'test@gmail.com',
  avatarURL: 'https://cdn.eva.vn/upload/3-2022/images/2022-08-12/image31-1660292104-121-width2048height1972.jpg',
 };

 constructor(public userService: UserService, public friendshipService:FriendshipService){}
 emailForm!: FormGroup;
 ngOnInit(): void {
   this.emailForm = new FormGroup({
     email: new FormControl('', [Validators.required]),
   });
 }
 async addFriend(value: string){
  let yEmail = value;
  if (yEmail){
    if (this.user == null) {
      return;
    }
    let result = await this.friendshipService.addFriendship(
      this.user!.email,
      yEmail
    );
    if (result) {
      alert('Add friend success');
    } else {
      alert('Add friend failed');
    }
  }
 }
}
