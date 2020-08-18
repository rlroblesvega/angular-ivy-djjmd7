import { Component, VERSION , OnInit} from '@angular/core';
import { MyserviceService } from './myservice.service';
import { Hero }  from '../hero';
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
      logger.header('App Component Loaded...') 
    }

  public persondata = [];
  public currencies = [];
   ngOnInit() {

      this.todaydate = this.myservice.getToken().subscribe((res:any)=> {
        console.log(this.todaydate)
      });
      console.log(this.todaydate)
      /*
      this.myservice.getCurrencies(getToken).subscribe((data) => {
         this.currencies = data;
         console.log(this.currencies);
      });
      */
   }


 //private  logger1: NgxFancyLoggerService;


  /*
  callServer(port) {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    this.http.post<any>(`https://jsonplaceholder.typicode.com/posts`, {}, {
      headers: headers
    })
    .subscribe(data => {
      this.logger1.info(data);
      console.log(data);
      this.logger.debug('fetched heroes');
      this.logger.info('This is a info log', {data: {a: 20, b:30 }});
      this.logger.debugOperator('Result')
    });
  }
  */

  name = 'Angular ' + VERSION.major;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(0, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

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

  newHero() {
    this.model = new Hero(42, '', '');
  }

  skyDog(): Hero {
    let myHero =  new Hero(42, 'SkyDog',
                           'Fetch any object at any distance',
                           'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }
}
