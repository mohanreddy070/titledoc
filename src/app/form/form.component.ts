import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titleForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.titleForm = this.fb.group({
      orderNumber: ['', [Validators.required, ]],
      searchDate: ['', [Validators.required, ]]
      
    });
  }

}