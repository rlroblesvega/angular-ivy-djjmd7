import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxFancyLoggerModule , LogLevel } from 'ngx-fancy-logger';
@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpClientModule , NgxFancyLoggerModule.forRoot({
        showTime: false,
        logLevel: LogLevel.WARNING,
        levelColor: {
            [LogLevel.ERROR]: 'brown'
        }
    })],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
