import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ChannelDetailsComponent } from './channel-details.component';
import { AmDemodComponent } from './am-demod/am-demod.component';
import { ChannelNotSupportedComponent } from './channel-not-supported/channel-not-supported.component';

export const routes: Routes = [
  {
    path: '',
    component: ChannelDetailsComponent,
    children: [
      {
        path: 'amdemod',
        component: AmDemodComponent
      },
      {
        path: 'notsupported',
        component: ChannelNotSupportedComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChannelDetailsRoutingModule {
}