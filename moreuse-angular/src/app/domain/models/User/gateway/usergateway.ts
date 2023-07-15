import { Observable } from "rxjs";
import { Token } from "../../token";
import { User } from "../../user";

export abstract class Usergateway {
  abstract login(email: string, password:string): Observable<Token>;
  abstract signup(user:User): Observable<User>;
}
