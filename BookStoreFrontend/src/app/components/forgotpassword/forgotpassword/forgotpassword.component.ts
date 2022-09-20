import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user : UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
    })
  }
  onSubmit() {
    this.submitted = true;

    if (this.forgotForm.invalid) {
      console.log("invalid data");
    }
    else{
      console.log("Forgot Password Successfully");
      let reqData={
        EmailId:this.forgotForm.value.emailId
      }
      this.user.forgotpassword(reqData).subscribe((response:any)=> {
        console.log(response);
        
      })

    }
  
  }
  

  

}
