import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { properties } from '../../../assets/properties/properties';
import { ApiService } from '../../service/api.service';
import { ConstantUri } from '../../utils/contstantUri';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo = properties.logo;
  formLogin: FormGroup = new FormGroup( {});

  constructor(
    private fb: FormBuilder,
    private readonly apiService: ApiService<any>
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group( {
      username:[ '', Validators.required ],
      password:[ '', Validators.required ],
    });
  }

  login() {
    if(this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      for (const key in this.formLogin.controls) {
        //console.log(key);
        this.formLogin.controls[key].markAsDirty();
      }
      return;
    }

    const  {username, password} = this.formLogin.value;

    const body = {
      username,
      password,
      request_token: sessionStorage.getItem('requestToken')
    }
    const configPost = { url: ConstantUri.validateWithLogin, params: { api_key: ConstantUri.apikey }, body }
    //const configPost =  {url: ConstantUri.validateWithLogin , params:  {api_key: ConstantUri.apikey} , body };
    this.apiService.postService(configPost).subscribe(val =>  {
      //console.log(val);
      const { request_token } = val;
      sessionStorage.setItem('requestToken', request_token);
    });

    console.log(this.formLogin.value);
  }
}
