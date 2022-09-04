import { FormControl } from '@angular/forms';

export interface CreateProductForm {
  name: FormControl<string>;
  description: FormControl<string>;
  price: FormControl<number>;
  file: FormControl<File>;
}
