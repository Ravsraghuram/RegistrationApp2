import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    RegForm: FormGroup;
    errorMessage: any;
    title: string = "RegistrationForm";

    constructor(private _fb: FormBuilder, private _registrationservice: RegistrationService, private _router: Router) {
        this.RegForm = this._fb.group({
            FirstName: [""],
            LastName: [""],
            Gender: [""],
            Phonenumber: [""]
        })
    }

    ngOnInit() {

    }
    Register() {
        debugger
        if (!this.RegForm.valid) {
            return;
        }

        if (this.title == "RegistrationForm") {
            debugger;
            this._registrationservice.SaveForm(this.RegForm.value)
                .subscribe((data) => {
                    alert("Data saved successfully.");
                    this.RegForm.reset();
                }, error => this.errorMessage = error)

        }
    }

}


