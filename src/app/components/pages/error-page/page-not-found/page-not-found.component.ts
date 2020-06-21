import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  public windowWidth: number = window.innerWidth;
  constructor() {}

  ngOnInit(): void {}

  handleResize(e): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 1056) {
      this.displayFooter();
    }
  }

  ngAfterViewInit(): void {
    if (window.innerWidth > 1056) {
      this.displayFooter();
    }
  }

  private displayFooter(): void {
    const footerElem = document.getElementsByTagName('app-page-not-found')[0]
      .children[1];
    if (footerElem !== undefined && footerElem !== null) {
      document
        .getElementsByTagName('app-page-not-found')[0]
        .removeChild(footerElem);
      document.getElementsByClassName('root-inner')[0].appendChild(footerElem);
    }
  }
}
