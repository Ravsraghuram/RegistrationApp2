import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    myAppUrl: string = "";

    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    SaveForm(formData) {
        debugger
        return this._http.post(this.myAppUrl + 'api/Registration/', formData)
    }
}

