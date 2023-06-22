import { AbstractControl } from "@angular/forms";

export function validateAplhaNumeric(control:AbstractControl){
    if(control.value === '' || control.value === null){
        return null;
    }
    let val = (control.value) ? control.value: window.event;
    if( /[^a-zA-Z0-9\s]/.test(val) ) {
        return { isValidated: true };
    }
    return null;
}

export function isNumericOnly(control:AbstractControl){
    if(control.value === '' || control.value === null){
        return null;
    }
    let val = (control.value) ? control.value: window.event;
    if( /[^0-9]/.test(val) ) {
        return { isValidated: true };
    }
    return null;
}

export function ageRangeValidator(control:AbstractControl){
    
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { 'ageRange': true };
    }
    return null;

}