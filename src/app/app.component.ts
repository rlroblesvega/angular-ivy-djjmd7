import { Component, VERSION , OnInit} from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Fields }  from './fields';
import { NgxFancyLoggerService } from 'ngx-fancy-logger';
import { HttpClient ,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {

  todaydate;
  result;
  //const headerss = new NgxFancyLoggerService();

    constructor(
      private http: HttpClient , 
      private  logger: NgxFancyLoggerService , 
      private myservice: MyserviceService
    ){ 
      this.todaydate = this.myservice.getAllPlayers().subscribe((res: any)=> {
        console.log(this.todaydate)
      });
      logger.header('App Component Loaded...') 
    }

  public persondata = [];
  public currencies = [];
   ngOnInit() {

      this.todaydate = this.myservice.getToken().subscribe(data => {
        console.log(this.todaydate)
      });
      /*
      this.myservice.getCurrencies(getToken).subscribe((data) => {
         this.currencies = data;
         console.log(this.currencies);
      });
      */
   }




  name = 'Angular ' + VERSION.major;

  model = new Fields('','',0,0);

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    
    /*
    this.myservice.calculate(getToken,{}).subscribe((data) => {
         this.persondata = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.persondata);
    });
    */
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newCalculation() {
    this.model = new Fields('','',0,0);
  }
}
