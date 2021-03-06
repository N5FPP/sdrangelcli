import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetailsComponent } from './device-details.component';
import { AirspyhfComponent } from './airspyhf/airspyhf.component';
import { DeviceNotSupportedComponent } from './device-not-supported/device-not-supported.component';
import { DeviceDetailsRoutingModule } from './device-details-routing.module';
import { MatCardModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RtlsdrComponent } from './rtlsdr/rtlsdr.component';
import { TestsourceComponent } from './testsource/testsource.component';
import { HackrfInputComponent } from './hackrf-input/hackrf-input.component';
import { HackrfOutputComponent } from './hackrf-output/hackrf-output.component';
import { LimesdrInputComponent } from './limesdr-input/limesdr-input.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { LimesdrOutputComponent } from './limesdr-output/limesdr-output.component';
import { PlutosdrInputComponent } from './plutosdr-input/plutosdr-input.component';
import { PlutosdrOutputComponent } from './plutosdr-output/plutosdr-output.component';
import { PerseusComponent } from './perseus/perseus.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatTooltipModule,
    CommonComponentsModule,
    DeviceDetailsRoutingModule
  ],
  declarations: [
    DeviceDetailsComponent,
    AirspyhfComponent,
    DeviceNotSupportedComponent,
    RtlsdrComponent,
    TestsourceComponent,
    HackrfInputComponent,
    HackrfOutputComponent,
    LimesdrInputComponent,
    LimesdrOutputComponent,
    PlutosdrInputComponent,
    PlutosdrOutputComponent,
    PerseusComponent
  ]
})
export class DeviceDetailsModule { }
