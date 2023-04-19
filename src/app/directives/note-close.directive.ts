import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appNoteClose]',
})
export class NoteCloseDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);

    console.log('nativeElement', this.elementRef.nativeElement);
    console.log('target', target);

    if (!clickedInside && target.id !== 'card1TA') {
      console.log('outside click xx');
      this.clickOutside.emit();
    }
  }
}
