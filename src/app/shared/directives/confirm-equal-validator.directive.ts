import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";
@Directive({
  selector: '[bdgConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {
  @Input() bdgConfirmEqualValidator: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.bdgConfirmEqualValidator);

    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'notEqual': true }
    }

    return null;
  }
}
