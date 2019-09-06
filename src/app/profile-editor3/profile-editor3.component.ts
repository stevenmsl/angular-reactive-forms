import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor3',
  templateUrl: './profile-editor3.component.html',
  styleUrls: ['./profile-editor3.component.css']
})
export class ProfileEditor3Component implements OnInit {

  constructor(private fb: FormBuilder ) { }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])  
  });

  get aliases() {
    //you need to cast the type AbstractControl to FormArray
    return this.profileForm.get('aliases') as FormArray;  
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

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
