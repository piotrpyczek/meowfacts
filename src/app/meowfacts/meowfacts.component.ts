import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { expand, filter, finalize, Subject, take, takeUntil, takeWhile } from 'rxjs';
import { Meowfact, MeowfactsService } from '../model';

@Component({
  selector: 'app-meowfacts',
  templateUrl: './meowfacts.component.html',
  styleUrls: ['./meowfacts.component.scss']
})
export class MeowfactsComponent implements OnInit, OnDestroy {

  private destroyed$ = new Subject<void>();
  loading: boolean = false;

  @ViewChild('meowfactsContainer') container!: ElementRef<HTMLElement>;
  @ViewChild('meowfactsWrapper') wrapper!: ElementRef<HTMLElement>;

  constructor(private meowfactsService: MeowfactsService) {
  }

  meowfacts: Meowfact[] = [];

  ngOnInit(): void {
    this.fetchInitialData();
  }

  fetchInitialData() {
    this.getUniqueMeowfacts()
      .pipe(
        takeWhile(() => !this.isPageFull())
      )
      .subscribe(meowfact => {
        this.meowfacts.push(meowfact);
      });
  }

  onFetchNext() {
    if (this.loading) {
      return;
    }

    this.getUniqueMeowfacts()
      .pipe(
        take(1)
      )
      .subscribe(meowfact => {
        this.meowfacts.push(meowfact);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private getUniqueMeowfacts() {
    this.loading = true;

    return this.meowfactsService.getMeowfact()
      .pipe(
        expand(() => this.meowfactsService.getMeowfact()),
        filter(meowfact => this.isUniqueFact(meowfact)),
        takeUntil(this.destroyed$),
        finalize(() => this.loading = false)
      );
  }

  private isPageFull(): boolean {
    return this.wrapper.nativeElement.clientHeight > this.container.nativeElement.clientHeight;
  }

  private isUniqueFact(meowfact: Meowfact): boolean {
    let isUnique = this.meowfacts.findIndex(x => x.data == meowfact.data) < 0;
    return isUnique;
  }

}
