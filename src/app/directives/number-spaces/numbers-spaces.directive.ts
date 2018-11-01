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

  private isCharacterAllowed(candidate: string): boolean {
    //TODO: Figure out the regex expression, test for space or numeric in the interim
    if( candidate == ' ' || this._regex.test(candidate)) {
      return true;
    }

    return false;
  }

  private isAllowed(candidate: string): boolean {
    for(let i: number = 0; i < candidate.length; i++ ) {
      const currentCharacter = candidate.charAt( i );
      if( !this.isCharacterAllowed(currentCharacter) )  {
        return false;
      }
    }
    
    return true;
  }

  private handleEvent(candidate: string, event): boolean {
    if( !this.shouldApply(event) ) { 
      return true;
    };

    if( this.isAllowed(candidate) ) {
      return true;
    }
    else {
      event.preventDefault();
      return false;
    }
  }

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const inputChar = event.key;
    return this.handleEvent(inputChar, event);
  }

  @HostListener('paste', ['$event']) 
  pasteEvent(event) {
    const data = event.clipboardData.getData('Text');
    return this.handleEvent(data, event);
  }
}
