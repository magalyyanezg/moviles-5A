import { Component } from '@angular/core';
import { ApiService } from './service/api.service';
import { ConstantUri } from './utils/contstantUri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private apiService: ApiService<any>
  ) {
    ConstantUri.tokenNew;
    const getConfig = { url: ConstantUri.tokenNew,  params: ConstantUri.apikey };
    this.apiService.getService(getConfig).subscribe(val => {
      console.log(val);
      const  {request_token} = val;
      sessionStorage.setItem('requestToken', request_token);
    } );
  }

  title = 'APP-MOVILES';
}

