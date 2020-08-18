
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const IP_SERVER = '127.0.0.1';
const IP_PORT = '80';
const HAS_HTTPS = 'S';
const HTTPS = HAS_HTTPS == 'S' ? 'https' : 'http';
// const URL_BASE = `${HTTPS}://${IP_SERVER}:${IP_PORT}`
const URL_BASE = ``

const URL_API_CALCULATE = `${URL_BASE}/exchange-rate/calculation`
//const URL_API_TOKEN = `${URL_BASE}/token`
const URL_API_TOKEN = `https://jsonplaceholder.typicode.com/posts`
const URL_API_CURRENCY = `${URL_BASE}/exchange-rate/list`
const URL_API_UPDATE = `${URL_BASE}/exchange-rate/list`

const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json; charset=utf-8');
headers.set('Authorization', '');

@Injectable({
   providedIn: 'root'
})
export class MyserviceService {
   private finaldata = [];
   private apiurl = "http://jsonplaceholder.typicode.com/users";
   constructor(private http: HttpClient) { }

   
   calculate(token:string,event:object) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Authorization', token);
    const body = JSON.stringify(event);
    return this.http.post(URL_API_CALCULATE,body,{headers: headers});
   }

   getToken(){
    const body = {
      "email":"admin@leadgods.com",
      "password":"admin"
      }; 
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(URL_API_TOKEN,body,{headers: headers});
   }

   getCurrencies(token:string) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Authorization', token);
    return this.http.get(URL_API_CURRENCY,{headers: headers});
   }

   updateExchange(token:string,event:object) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Authorization', token);
    const body = JSON.stringify(event);
    return this.http.post(URL_API_UPDATE,body,{headers: headers});
   }

   getAllPlayers(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts"); 
  }
}

/*
const token = await getToken();

function getData() {
      return this.http.get(this.apiurl);
   }


const calculate = async (originCurrency: string, destinationCurrency: string, amount:number) => {
    const body = JSON.stringify({originCurrency,destinationCurrency,amount}); 
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Authorization', 'Bearer ');
    await this.http.post(URL_API_CALCULATE, body, {headers: headers}).subscribe(
        (data) => {
            console.log(data);
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    );
}


const getToken = async () => {
    const body = {
      "email":"admin@leadgods.com",
      "password":"admin"
      };            
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    headers.set('Authorization', 'Bearer ');
    await this.http.post(URL_API_TOKEN, body, {headers: headers}).subscribe(
        (data) => {
            console.log(data);
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    );
}


const listCurrency = async () => {
    const body = {};            
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    await this.http.post(URL_API_TOKEN, body, {headers: headers}).subscribe(
        (data) => {
            console.log(data);
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    );
}

export { calculate , getToken , listCurrency };

*/