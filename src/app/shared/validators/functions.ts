
import { 
  AbstractControl, 
  ValidatorFn, 
  FormGroup,
  ValidationErrors } from '@angular/forms';


export function forbiddenEmailValidator(email: String): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value === email;
    return forbidden ? {'forbiddenEmail': {value: control.value}} : null
  };
}

export function sameAsValidator(controls: string[]): ValidatorFn {
  return (control: FormGroup): ValidationErrors | null => {
    debugger
    const firstControl = control.get(controls[0]);
    const secondControl = control.get(controls[1]);

    if (!firstControl || !secondControl) { return null; }

    return firstControl.value !== secondControl.value ? {'sameAs': {value: control.value}} : null;
  }
}
