import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule, 
    MatTabsModule,
  } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatTabsModule, 
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatTabsModule,
    MatInputModule
  ]
})

export class MaterialModule {}