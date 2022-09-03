import { Component } from '@angular/core';
import { DynamicFormWrapper } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/dynamic-form-wrapper.abstract';
import { CreateProductServcie } from './create-product-service/create-product.service';

@Component({
  selector: 'ecommerce-create-product-form',
  templateUrl:
    '../../../../shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/default-form-wrapper.component.html',
  styleUrls: [
    '../../../../shared/accessory-modules/dynamic-form/components/dynamic-form-wrapper/default-form-wrapper.component.scss',
  ],
  providers: [CreateProductServcie],
})
export class CreateProductFormComponent extends DynamicFormWrapper {
  protected form = this.createProductService.form;
  protected formFields = this.createProductService.formFields;
  protected formTitle = 'Add new product';
  protected submitButtonLabel = 'Add';
  protected submitAction = this.submitCreateProductForm;

  constructor(private createProductService: CreateProductServcie) {
    super();
  }

  private submitCreateProductForm() {
    this.createProductService.submitCreateProductForm();
  }
}
