import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

export interface ScrollableContainerDimentions {
  scrollTop: number;
  scrollHeight: number;
  clientHeight: number;
}

@Directive({
  selector: '[infiniteList]',
})
export class InfiniteListDirective {

  private lastScrollPosition!: number;

  @Input() threshold: number = 100;

  @Output() bottomThreshold = new EventEmitter(true);

  @HostListener('scroll')
  onElementScroll() {
    this.checkScrollPosition(this.elementRef.nativeElement);
  }

  constructor(private elementRef: ElementRef) { }

  checkScrollPosition({ scrollHeight, scrollTop, clientHeight }: ScrollableContainerDimentions) {
    const initialCheck = this.lastScrollPosition == null;
    const scrollDown = scrollTop > this.lastScrollPosition;
    const distanceToBottom = scrollHeight - scrollTop - clientHeight;

    if ((initialCheck || scrollDown) && distanceToBottom <= this.threshold) {
      this.bottomThreshold.emit();
    }

    this.lastScrollPosition = scrollTop;
  }

}
