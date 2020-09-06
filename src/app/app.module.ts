import { GitUserService } from './git-user/git-user.service';
import { Utils } from './utils/util.service';
import { HelloWorldService } from './service/hello-world.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GitUserComponent } from './git-user/git-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GitUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HelloWorldService,
    Utils,
    GitUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
