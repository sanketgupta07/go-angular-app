import { HelloWorldService } from './service/hello-world.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-angular-app';
  constructor(private hw: HelloWorldService){}

  OnInit(){
    // this.hw.helloWorld().subscribe(resp => this.title = resp.toString());
    this.title = 'sanket';
  }
}
