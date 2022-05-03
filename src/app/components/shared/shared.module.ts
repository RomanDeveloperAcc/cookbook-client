import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CancelPopupComponent } from "./cancel-popup/cancel-popup.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

export const SHARED_MAT_IMPORTS = [
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
]

@NgModule({
  declarations: [
    CancelPopupComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...SHARED_MAT_IMPORTS,
  ],
  exports:[
    CancelPopupComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
