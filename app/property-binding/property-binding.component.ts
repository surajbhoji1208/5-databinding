import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators,FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { 
  
    
  }

  ngOnInit(): void {
  }
 form=new FormGroup({
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
 })
  

}
