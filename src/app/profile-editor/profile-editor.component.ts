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
    lastName: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
