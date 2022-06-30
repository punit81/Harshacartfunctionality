import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-linkedin-form',
  templateUrl: './linkedin-form.component.html',
  styleUrls: ['./linkedin-form.component.css']
})
export class LinkedinFormComponent implements OnInit {

  linkedinForm=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    experiences: new FormArray([this.newExperience()],)
  });

  get experienceObj(){
    return this.linkedinForm.get('experiences') as FormArray;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  newExperience(){
    return new FormGroup({
      yrs: new FormControl(),
      org: new FormControl(),
    })
  }

  addExperience(){
    this.experienceObj.push(this.newExperience());
  }

  removeExperience(index: number){
    this.experienceObj.removeAt(index);
  }

}
