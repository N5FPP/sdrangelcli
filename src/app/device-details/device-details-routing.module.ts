import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DeviceDetailsComponent } from './device-details.component';
import { AirspyhfComponent } from './airspyhf/airspyhf.component';
import { DeviceNotSupportedComponent } from './device-not-supported/device-not-supported.component';
import { RtlsdrComponent } from './rtlsdr/rtlsdr.component';
import { TestsourceComponent } from './testsource/testsource.component';
import { HackrfInputComponent } from './hackrf-input/hackrf-input.component';
import { HackrfOutputComponent } from './hackrf-output/hackrf-output.component';
import { LimesdrInputComponent } from './limesdr-input/limesdr-input.component';
import { LimesdrOutputComponent } from './limesdr-output/limesdr-output.component';
import { PlutosdrInputComponent } from './plutosdr-input/plutosdr-input.component';
import { PlutosdrOutputComponent } from './plutosdr-output/plutosdr-output.component';
import { PerseusComponent } from './perseus/perseus.component';

export const routes: Routes = [
  {
    path: '',
    component: DeviceDetailsComponent,
    children: [
      {
        path: 'airspyhf',
        component: AirspyhfComponent
      },
      {
        path: 'hackrfin',
        component: HackrfInputComponent
      },
      {
        path: 'hackrfout',
        component: HackrfOutputComponent
      },
      {
        path: 'limesdrin',
        component: LimesdrInputComponent
      },
      {
        path: 'limesdrout',
        component: LimesdrOutputComponent
      },
      {
        path: 'perseus',
        component: PerseusComponent
      },
      {
        path: 'plutosdrin',
        component: PlutosdrInputComponent
      },
      {
        path: 'plutosdrout',
        component: PlutosdrOutputComponent
      },
      {
        path: 'rtlsdr',
        component: RtlsdrComponent
      },
      {
        path: 'testsource',
        component: TestsourceComponent
      },
      {
        path: 'notsupported',
        component: DeviceNotSupportedComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DeviceDetailsRoutingModule {
}