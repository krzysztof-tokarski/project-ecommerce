import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FileUploadComponentOptions } from './models/file-upload-component-options.interface';

@Component({
  selector: 'ecommerce-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  @Input() public options!: FileUploadComponentOptions;
  @Input() public form!: FormGroup;
  @Input() public controlName!: string;
  @Input() public showUploadButton!: boolean;
  @Input() public showCancelButton!: boolean;
  @Input() public acceptableFileTypes!: string;
  @Input() public maxFileSize!: number;

  private formControl!: AbstractControl;
  // TODO typing

  constructor() {
    this.showUploadButton = this.options?.showUploadButton || false;
    this.showCancelButton = this.options?.showCancelButton || false;
    this.acceptableFileTypes = this.options?.acceptableFileTypes || '';
    this.maxFileSize = this.options?.maxFileSize || 0;
    // TODO add fallback values
  }

  public ngOnInit(): void {
    this.formControl = this.form.controls[this.controlName];
  }

  protected addFiles(event: { files: File[] }) {
    this.formControl.setValue(event.files);
    this.formControl.markAsTouched();
  }

  protected removeFiles() {
    this.formControl.reset();
  }
}
