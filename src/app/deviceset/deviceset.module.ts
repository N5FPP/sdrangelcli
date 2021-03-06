import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesetComponent } from './deviceset/deviceset.component';
import { DeviceComponent } from './device/device.component';
import { ChannelComponent } from './channel/channel.component';
import { AddChannelDialogComponent } from './add-channel-dialog/add-channel-dialog.component';
import { ChangeDeviceDialogComponent } from './change-device-dialog/change-device-dialog.component';
import { RemoveChannelDialogComponent } from './remove-channel-dialog/remove-channel-dialog.component';
import { LoadPresetDialogComponent } from './load-preset-dialog/load-preset-dialog.component';
import { SavePresetDialogComponent } from './save-preset-dialog/save-preset-dialog.component';
import { NewPresetDialogComponent } from './new-preset-dialog/new-preset-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DevicesetComponent,
    DeviceComponent,
    ChannelComponent,
    AddChannelDialogComponent,
    ChangeDeviceDialogComponent,
    RemoveChannelDialogComponent,
    LoadPresetDialogComponent,
    SavePresetDialogComponent,
    NewPresetDialogComponent
  ]
})
export class DevicesetModule { }
