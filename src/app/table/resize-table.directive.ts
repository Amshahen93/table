import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appResizeTable]'
})
export class ResizeTableDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  grabber;
  oldX;
  resizeElem;
  width;
  @Input() resizeTable;
  table;
  tableWidth;
  mouseMoveListener: () => void;
  mouseUpListner: () => void;
  ngOnInit() {
    this.table = this.element.nativeElement.parentNode.parentNode.parentNode;
    this.element.nativeElement.setAttribute('style',
    `position: relative;`);
    this.width = this.element.nativeElement.clientWidth;
    this.createResizeElement();
  }

  createResizeElement() {
    this.resizeElem = this.renderer.createElement('div');
    this.resizeElem.setAttribute('style',
      `width: 6px;
      position: absolute;
      height: 100%;
      top: 0px;
      right: -4px;
      cursor: col-resize;
      z-index: 100;
      pointer-events: auto`
    );
    this.renderer.appendChild(this.element.nativeElement, this.resizeElem);
    this.setResizeElementMousedownLisener();
  }

  setResizeElementMousedownLisener() {
    this.renderer.listen(this.resizeElem, 'mousedown', (event: MouseEvent) => {
      this.grabber = true;
      this.oldX = event.clientX;
      event.stopPropagation();
      this.mouseMoveElement();
      this.mouseUpElement();
    });
  }

  resizer(offsetX: number) {
    if (this.width < 51 && offsetX < 0) {
      this.width = 50;
    } else {
      this.width += offsetX;
      this.tableWidth = this.table.clientWidth;
      this.tableWidth += offsetX;
    }
    this.element.nativeElement.style.width = this.width + 'px';
    if (this.resizeTable) {
      this.table.style.width = this.tableWidth + 'px';
    }
  }

  mouseMoveElement() {
    this.mouseMoveListener = this.renderer.listen(window, 'mousemove', (event: MouseEvent) => {
      this.resizer(event.clientX - this.oldX);
      this.oldX = event.clientX;
    });
  }
  mouseUpElement() {
    this.mouseUpListner = this.renderer.listen(window, 'mouseup', (event: MouseEvent) => {
      if (this.mouseMoveListener) {
        this.mouseMoveListener();
      }
      if (this.mouseUpListner) {
        this.mouseUpListner();
      }
    });
  }
}
