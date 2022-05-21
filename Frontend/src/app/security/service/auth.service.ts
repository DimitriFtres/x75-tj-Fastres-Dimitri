import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ApiResponse, ApiUriEnum} from '@shared/model';
import {ApiService, HttpService, NavigationService} from '@shared/service';
import {map, tap} from 'rxjs/operators';
import {TokenService} from "./token.service";
import {RefreshPayload, SigninPayload, SignupPayload, TokenDto} from "../model";
import {SigninResponse} from "../model/response/signin.response";
import {Address} from "@org-empl/model";
import {Credential} from "@auth/model";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(public tokenService: TokenService, public http: HttpService, public navigation: NavigationService) {
    super(http);
  }

  signin(payload: SigninPayload): Observable<Credential> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.SIGNIN}`, payload).pipe(
      tap((response: ApiResponse) => {
        if (response.result) {
          const signinResponse: SigninResponse = response.data as SigninResponse;
          this.tokenService.saveToken(signinResponse.token.access_token);
          this.tokenService.saveRefreshToken(signinResponse.token.refresh_token);
          this.isAuthenticated$.next(true);
          this.navigation.navigateToSecure();
        }
      }),
      map(response => {
        if(response.result)
        {
          return response.data as Credential;
        }
        else
        {
          return {} as Credential;
        }
      }),
    )
  }

  me(): Observable<Credential> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.ME}`).pipe(
      map(response => {
        if(response.result)
        {
          return response.data as Credential;
        }
        else
        {
          return {} as Credential;
        }
      })
    );
  }

  signup(payload: SignupPayload): Observable<Credential> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.SIGNUP}`, payload).pipe(
      map(response => {
        if(response.result)
        {
          return response.data as Credential;
        }
        else
        {
          return {} as Credential;
        }
      })
    );
  }

  refreshToken(refresh: RefreshPayload): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.REFRESH_TOKEN}`, refresh).pipe(
      map((response: ApiResponse) => {
        if (response.result) {
          const tokenResponse: TokenDto = response.data as TokenDto;
          this.tokenService.saveToken(tokenResponse.access_token);
          this.tokenService.saveRefreshToken(tokenResponse.refresh_token);
          this.isAuthenticated$.next(true);
        }
        return response;
      })
    )
  }

  logout(): void {
    this.tokenService.signOut();
    this.isAuthenticated$.next(false);
    this.navigation.navigateToUnsecure();
  }
}
