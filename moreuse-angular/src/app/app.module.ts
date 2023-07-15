import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './UI/layouts/default/default.module';
import { SharedModule } from './UI/shared/shared.module';
import { FullscreenModule } from './UI/layouts/fullscreen/fullscreen.module';
import { Usergateway } from './domain/models/User/gateway/usergateway';
import { MoreuseUserService } from './infraestructure/driven-adapter/services/moreuse-user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullscreenModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    {provide: Usergateway, useClass: MoreuseUserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
