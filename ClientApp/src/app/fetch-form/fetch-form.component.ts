import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-fetch-form',
  templateUrl: './fetch-form.component.html',
  styleUrls: ['./fetch-form.component.css']
})
export class FetchFormComponent implements OnInit {
    RegList: any;

    constructor(private _registrationservice:RegistrationService ) { }

  ngOnInit() {
  }
    //getRegForm() {
    //    this._registrationservice.getRegForm().subscribe(
    //        data => this.RegList = data
    //    )
    
}

