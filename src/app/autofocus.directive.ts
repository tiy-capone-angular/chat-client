import { Directive, ElementRef, AfterViewInit, Input, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit, OnDestroy {
  static firstFound: ElementRef;

  @Input()
  appAutofocus: string;

  @Input()
  appAutofocusShouldSelect: boolean;

  constructor(
    private elementRef: ElementRef
  ) {
    if (AutofocusDirective.firstFound === undefined) {
      AutofocusDirective.firstFound = this.elementRef;
    } else {
      console.error('You have too many [appAutofocus]es. Go delete some.');
    }
  }

  ngAfterViewInit(): void {
    // If we don't have a DOM, then don't run the focus
    // method
    if (AutofocusDirective.firstFound.nativeElement) {
      AutofocusDirective.firstFound.nativeElement.focus();
      AutofocusDirective.firstFound.nativeElement.value = this.appAutofocus;
      if (AutofocusDirective.firstFound.nativeElement.select) {
        AutofocusDirective.firstFound.nativeElement.select();
      }
    }
  }

  ngOnDestroy(): void {
    AutofocusDirective.firstFound = undefined;
  }

}
