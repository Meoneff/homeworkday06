import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInfo} from '../../../../models/user-info';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userInfo: BehaviorSubject<UserInfo |null >;

  constructor(private auth:Auth) { 
    this.userInfo = new BehaviorSubject<UserInfo | null>({
      id:'id-001',
      name:'John Doe',
      email: 'test@gmail.com',
      avatarURL: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    } as UserInfo); //reload là hiện phần test trước


    onAuthStateChanged(this.auth,(user)=>{
      console.log(user);
      if (user) {
        this.userInfo.next({
          // id:user.uid,
          name: user.displayName,
          email:user.email,
          avatarURL: user.photoURL,
        } as UserInfo);
      } else {
        this.userInfo.next(null);
      }
    },
    (error) =>{
      console.log(error);
    });
  }


  async logout(){
    await signOut(this.auth);
  }


}
