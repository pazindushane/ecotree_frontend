import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CRecommendService {

  Url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCropData():Observable<any>  {
    return this.http.post(this.Url+'/predict_crop', {
      // accident_Id: accident_Idy,
      approved: "Approved",
      headers:new HttpHeaders({

        // 'Authorization': 'Bearer ' + JSON.parse(this.cookieService.get('token')),
      })
    })
  }
}
