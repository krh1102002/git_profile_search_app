import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientId, ClientSecret } from '../credentials/gitcredentials';
import {  Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  public getProfile(searchQuery):Observable<any>{
    let dataUrl=`https://api.github.com/users/${searchQuery}?client_id=${ClientId}&client_secret=${ClientSecret}`;
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }


  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      //client side error
      errorMessage=`MESSAGE:${error.error.message}`
    }else{
      // server side error 
      errorMessage= `STATUS:${error.status} MESSAGE: ${error.message}`;
    }
    return throwError(errorMessage)

  }
}
