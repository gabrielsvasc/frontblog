import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appBehavior]'
})
export class BehaviorDirective {
  constructor() { }

  @Output() public clickedOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target.id'])
  public onClick(target: any) {
    const clickedInside = target.toString();
    const checkClick = (clickedInside == 'overlay-open');

    if (!checkClick) {
      this.clickedOutside.emit(target);
    }
  }
}
