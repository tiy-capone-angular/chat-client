import { Directive, ElementRef, AfterViewInit, Input, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit, AfterViewInit, OnDestroy {
  ngOnInit(): void {
    console.log('autofocus should select:', this.appAutofocusShouldSelect);
  }
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
    console.log('autofocus created');
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
    console.log('autofocus destroyed');
    AutofocusDirective.firstFound = undefined;
  }

}
