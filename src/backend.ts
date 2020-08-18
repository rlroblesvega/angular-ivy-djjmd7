
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const IP_SERVER = '127.0.0.1';
const IP_PORT = '80';
const HAS_HTTPS = 'S';
const HTTPS = HAS_HTTPS == 'S' ? 'https' : 'http';
const URL_BASE = `${HTTPS}://${IP_SERVER}:${IP_PORT}`

const URL_API_CALCULATE = `${URL_BASE}/exchange-rate/calculation`
const URL_API_TOKEN = `${URL_BASE}/token`
const URL_API_CURRENCY = `${URL_BASE}/exchange-rate/list`

const calculate = async (originCurrency: string, destinationCurrency: string, amount:number) => {
    const body = JSON.stringify({originCurrency,destinationCurrency,amount});                              
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
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