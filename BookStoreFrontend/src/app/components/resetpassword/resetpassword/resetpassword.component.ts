import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm! : FormGroup;
  submitted = false;
  token : any;

  constructor(private formBuilder: FormBuilder, private user : UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
  onSubmit() {
    this.submitted = true;

    if (this.resetForm.invalid) {
      console.log("invalid data");
    }
    else{
      console.log(this.resetForm.value);
      let reqData={
        resetPassword:this.resetForm.value.password,
        confirmPassword:this.resetForm.value.confirmPassword
      }
      this.user.resetpassword(reqData,this.token).subscribe((response:any)=> {
        console.log(response);
        
      })
    }
  }

}
