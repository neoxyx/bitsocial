import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegisterService } from '../../shared/services/register/register.service';
import { User } from '../../shared/services/register/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private registerService:RegisterService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signUpForm = this.formBuilder.group(
      {
        email: new FormControl('', [
          Validators.required
        ]),
        password: new FormControl('', Validators.required),
        nickname: new FormControl('', Validators.required),
        applicantcode: new FormControl('', Validators.required)
      }
    );
  }

  get form() {
    return this.signUpForm.controls;
  }

  checkIn() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      // return;
    }
    var validate = true;

    if (validate) {
      this.loading = true;
      this.registerService
        .registerUser(
          new User(
            this.form.email.value,
            this.form.password.value,
            this.form.nickname.value,
            '',
            '',
            '',
            this.form.applicantcode.value
          )
        )
        .subscribe(data => {
            this.loading = false;
            if(data.code == 418){
              alert('Usuario registrado correctamente.');
            }
            console.log(data);            
            //if (data['state'] == 'success') location.reload();
        });
    } else {

    }
  }

}
