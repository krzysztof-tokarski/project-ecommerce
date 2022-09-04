import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateProductDto } from '@project-ecommerce/product-models';
import { FormInputBase } from '@shared/accessory-modules/dynamic-form/components/dynamic-form-input/models/form-input-base/form-input-base.class';
import { DynamicFormService } from '@shared/accessory-modules/dynamic-form/dynamic-form.abstract.service';
import { environment } from 'apps/project-ecommerce/src/environments/environment';
import { createProductFormFields } from '../config/create-product-form-fields';
import { CreateProductForm } from '../models/create-product-form.interface';

@Injectable()
export class CreateProductServcie extends DynamicFormService {
  public readonly formFields: FormInputBase<string | boolean>[] =
    createProductFormFields;
  public readonly form!: FormGroup<CreateProductForm>;

  constructor(private httpClient: HttpClient) {
    super();
    super.initializeForm();
  }

  public submitCreateProductForm() {
    const { name, description, price, file } = this.form.controls;

    const newProductData: CreateProductDto = {
      name: name.value,
      description: description.value,
      price: price.value,
    };

    const PRODUCTS_ENDPOINT = new URL(
      `${environment.API_URL}/products`
    ).toString();

    this.httpClient.post(PRODUCTS_ENDPOINT, newProductData).subscribe();
    // TODO move to service
  }
}
