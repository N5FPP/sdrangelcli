import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { InstanceSummaryComponent } from './main/instance-summary/instance-summary.component';
import { DevicesetComponent } from './deviceset/deviceset/deviceset.component';
import { DeviceComponent } from './deviceset/device/device.component';
import { ChannelComponent } from './deviceset/channel/channel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InstanceSummaryComponent,
    DevicesetComponent,
    DeviceComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
