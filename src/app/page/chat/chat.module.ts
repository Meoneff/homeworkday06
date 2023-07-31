import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './component/chat/chat.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { FriendListComponent } from './component/friend-list/friend-list.component';
import { ChatBoxComponent } from './component/chat-box/chat-box.component';
import { ChatControlComponent } from './component/chat-control/chat-control.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    ChatComponent,
    UserInfoComponent,
    FriendListComponent,
    ChatBoxComponent,
    ChatControlComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class ChatModule { }
