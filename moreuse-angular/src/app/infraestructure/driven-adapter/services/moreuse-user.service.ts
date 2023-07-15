import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { Token } from 'src/app/domain/models/token';
import { User } from 'src/app/domain/models/user';

@Injectable({
  providedIn: 'root'
})
export class MoreuseUserService extends Usergateway{

  constructor(private httpClient: HttpClient) {
    super();
   }

   login(email: string, password: string):Observable<Token> {
     // let apiUrl = "https://run.mocky.io/v3/33410e3b-4850-4fcb-ac76-3a48aa458a97";
     let apiUrl = "http://localhost:3000/auth/login";

     return this.httpClient.post<Token>(
       apiUrl,
       {email, password});
   }

   signup(user:User):Observable<User> {
     let apiUrl = "http://localhost:3000/auth/signup";

     return this.httpClient.post<User>(
       apiUrl,
       user);
   }
}
