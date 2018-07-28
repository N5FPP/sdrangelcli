import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetailsComponent } from './device-details.component';
import { AirspyhfComponent } from './airspyhf/airspyhf.component';
import { DeviceNotSupportedComponent } from './device-not-supported/device-not-supported.component';
import { DeviceDetailsRoutingModule } from './device-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DeviceDetailsRoutingModule
  ],
  declarations: [
    DeviceDetailsComponent,
    AirspyhfComponent,
    DeviceNotSupportedComponent
  ]
})
export class DeviceDetailsModule { }