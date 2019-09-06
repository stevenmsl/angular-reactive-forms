import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile-editor2',
  templateUrl: './profile-editor2.component.html',
  styleUrls: ['./profile-editor2.component.css']
})
export class ProfileEditor2Component implements OnInit {
  
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })  
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.profileForm.value);
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
