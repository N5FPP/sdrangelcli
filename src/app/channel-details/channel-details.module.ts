import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelNotSupportedComponent } from './channel-not-supported/channel-not-supported.component';
import { AmDemodComponent } from './am-demod/am-demod.component';
import { ChannelDetailsComponent } from './channel-details.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { ChannelDetailsRoutingModule } from './channel-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatTooltipModule,
    ChannelDetailsRoutingModule    
  ],
  declarations: [
    ChannelNotSupportedComponent, 
    AmDemodComponent, 
    ChannelDetailsComponent
  ]
})
export class ChannelDetailsModule { }