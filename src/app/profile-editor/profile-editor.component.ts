import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
/*
A form group instance tracks the form state of a group of 
form control instances
*/


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  /*
  A form group tracks the status and changes for each of its controls, 
  so if one of the controls changes, the parent control also emits a new status or value change
  */
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    /* 
      Using a nested form group instance allows you to break large forms groups into smaller, more manageable ones.
    */
    address : new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() { }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
  }

  updateProfile() {
    /*
    The strict checks of the setValue() method help catch nesting errors in complex forms, 
    while patchValue() fails silently on those errors.
    Street is provided in an object inside the address property. This is necessary because the patchValue() method applies the update against the model structure. 
    */
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Dew Street'
      }
    });   
  }

}
