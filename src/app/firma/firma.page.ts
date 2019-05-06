import { Component, OnInit, ViewChild, Renderer } from "@angular/core";
import { Platform } from "@ionic/angular";

import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

@Component({
  selector: "app-firma",
  templateUrl: "./firma.page.html",
  styleUrls: ["./firma.page.scss"]
})
export class FirmaPage implements OnInit {
  @ViewChild("myCanvas") canvas: any;
  canvasElement: any;
  lastX: number;
  lastY: number;

  currentColour: string = "black";
  brushSize: number = 2;

  constructor(
    public platform: Platform,
    public renderer: Renderer,
    private screenOrientation: ScreenOrientation
  ) {}

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;

    /*    this.renderer.setElementAttribute(
      this.canvasElement,
      "width",
      this.platform.width() + ""
    );
    this.renderer.setElementAttribute(
      this.canvasElement,
      "height",
      this.platform.height() + ""
    ); */
  }

  handleStart(ev) {
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  handleMove(ev) {
    let ctx = this.canvasElement.getContext("2d");
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColour;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;
  }
}
