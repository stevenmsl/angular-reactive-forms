import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl(''); //You get immediate access to listen for, update, and validate the state of the form input.
  constructor() { }

  ngOnInit() {
  }

  updateName() {
    //the form model is the source of truth for the control
    this.name.setValue('Nacy');    
  }

}
