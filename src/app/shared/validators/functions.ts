
import { AbstractControl, ValidatorFn } from '@angular/forms';



export function forbiddenEmailValidator(email: String): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value === email;
    return forbidden ? {'forbiddenEmail': {value: control.value}} : null
  };
}
