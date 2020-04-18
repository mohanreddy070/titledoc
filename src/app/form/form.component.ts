import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  titleForm: FormGroup;
  
 
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.titleForm = this.fb.group({
      primaryInfo:this.fb.group({
        orderNumber: ["", [Validators.required]],
        searchDate: ["", [Validators.required]],
        effectiveDate: ["", [Validators.required]],
        address: this.fb.group({
          street1: "",
          street2: "",
          city: "",
          state: "",
          zip: "",
          parcelNo: "",
          lot: "",
          block: "",
          subDivision: ""
        })
      }),
      deed:this.fb.group({

      }),
      mortgage:this.fb.group({

      }),
      judgement:this.fb.group({

      }),
      tax:this.fb.group({
        assesmentYear: ["", [Validators.required]],
        taxYear: ["", [Validators.required]],
        landValue: ["", [Validators.required]],
        buildingValue: ["", [Validators.required]],
        totalValue: ["", [Validators.required]],
        exemption: ["", [Validators.required]],
        taxes:this.fb.group({
          installment: ["", [Validators.required]],
          amount: ["", [Validators.required]],
          status: ["", [Validators.required]],
          paidDueDate: ["", [Validators.required]]
        }),

      }),
      additionalInfo:this.fb.group({
        multipleNames
      }),

    });
  }
}
