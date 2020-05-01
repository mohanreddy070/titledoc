import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray
} from "@angular/forms";
import {DataService} from "../../data.service"

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  titleForm: FormGroup;
  data: DataService;

  get deeds(): FormArray {
    return this.titleForm.get('deeds') as FormArray;
  }

  get mortgages(): FormArray {
    return this.titleForm.get('mortgages') as FormArray;
  }
  
 
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
      deeds:this.fb.array([this.buildDeed()]),
      mortgages:this.fb.array([]),
      judgement:this.fb.group({
        judgementType: ["", [Validators.required]],
        plaintIf: ["", [Validators.required]],
        defendant: ["", [Validators.required]],
        datedDate: ["", [Validators.required]],
        recordedDate: ["", [Validators.required]],
        caseNo: ["", [Validators.required]],
        judgementAmount: ["", [Validators.required]],
        comments: ["", [Validators.required]],

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
        })

      }),
      additionalInfo:this.fb.group({
        multipleNames:["", [Validators.required]],
        additionalInfo: ["", [Validators.required]],
        legalDescription: ["", [Validators.required]],
        disclaimer: ["", [Validators.required]]
      })

    });
  }

//deed
  addDeed(){
    this.deeds.push(this.buildDeed());
  }

  buildDeed(): FormGroup{
    return this.fb.group({
      deedType: ["", [Validators.required]],
      considerationAmount: ["", [Validators.required]],
      grantor: ["", [Validators.required]],
      grantee: ["", [Validators.required]],
      vesting: ["", [Validators.required]],
      iBP: ["", [Validators.required]],
      datedDate: ["", [Validators.required]],
      recordedDate: ["", [Validators.required]],
      note: ["", [Validators.required]]
    });
  }

//mortgage
  addMortgage(){
    this.mortgages.push(this.buildMortgage());
  }

  buildMortgage(): FormGroup{
    return this.fb.group({
        mortgagor: ["", [Validators.required]],
        mortgagee: ["", [Validators.required]],
        grantor: ["", [Validators.required]],
        trustee: ["", [Validators.required]],
        iBP: ["", [Validators.required]],
        amount: ["", [Validators.required]],
        datedDate: ["", [Validators.required]],
        recordedDate: ["", [Validators.required]],
        note: ["", [Validators.required]],

      })
  }

//save action
  save(){
    this.data.addData('hello');
  }


}
