import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-number-spaces]'
})
export class NumbersSpacesDirective {

  private _regex = /^[0-9\s]*$/;
  
  constructor( ) { }

  private shouldApply( event: KeyboardEvent ): boolean {
    // This just feels so wrong -- revist when time permits
    const attribute: Attr = event.srcElement.attributes.getNamedItem('app-number-spaces');
  
    return !!attribute;
  }

  private isCharacterAllowed(event: KeyboardEvent, candidate: string): boolean {
    //TODO: Figure out the regex expression, test for space or numeric in the interim
    if( candidate === ' ' || this._regex.test(candidate)) {
      return true;
    }

    let lastCharacter: string = this.lookupLastCharacter(event.srcElement);
    if( lastCharacter !== '-' && candidate === '-' ) {
      return true;
    }

    return false;
  }

  private isAllowed(event: KeyboardEvent, candidate: string): boolean {
    for(let i: number = 0; i < candidate.length; i++ ) {
      const currentCharacter = candidate.charAt( i );
      if( !this.isCharacterAllowed(event, currentCharacter) )  {
        return false;
      }
    }
    
    return true;
  }

  private handleEvent(candidate: string, event): boolean {
    if( !this.shouldApply(event) ) { 
      return true;
    };

    if( this.isAllowed(event, candidate) ) {
      return true;
    }
    else {
      event.preventDefault();
      return false;
    }
  }

  private lastCharacter(value: string): string {
    if( !value ) {
      return "";
    }

    if( value.length == 0 ) {
      return "";
    }

    return value[ value.length - 1 ];
  }

  private lookupLastCharacter(element: Element): string {
    return this.lastCharacter( element.getAttribute("ng-reflect-model") )
  }

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const inputChar = event.key;
    return this.handleEvent(inputChar, event);
  }

  @HostListener('paste', ['$event']) 
  pasteEvent(event) {
    event.preventDefault();
    return false;
  }
}
