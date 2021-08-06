import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module.module';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { SpinnerButtonComponent } from '../components/spinner-button/spinner-button.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, SpinnerButtonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LoadingSpinnerComponent,
    SpinnerButtonComponent,
  ],
})
export class SharedModuleModule {}
