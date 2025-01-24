import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {familyData} from "./sample-data";
import {TreeNode} from "./interface";
import {card} from "./components/card";
import {onCardClickHandler} from "./event-handlers/on-card-click.handler";
import {fromMeToSpouse} from './components/from-me-to-spouse'
import { RECT_HEIGHT, RECT_WIDTH } from './constant'
import { fromMeToSiblings } from './components/from-me-to-siblings'
import { fromMeToOneParent } from './components/from-me-to-one-parent'
import { fromMeToParents } from './components/from-me-to-parents'

@Component({
  selector: 'lib-family-tree',
  standalone: true,
  styleUrls: ['./family-tree.component.scss'],
  templateUrl: './family-tree.component.html',
})
export class FamilyTreeComponent implements AfterViewInit {
  @ViewChild('canvas', {static: false}) canvasRef!: ElementRef<HTMLCanvasElement>;
  canvas!: HTMLCanvasElement
  person: TreeNode = familyData.me;

  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    const ctx = this.canvas.getContext('2d')!;
    const startX = window.innerWidth / 2 - RECT_WIDTH / 2;
    const startY = window.innerHeight / 2 - RECT_HEIGHT / 2;
    this.drawCard(ctx, this.person, startX, startY);
  }

  drawCard(ctx: CanvasRenderingContext2D, person: any, x: number, y: number): void {
    // Рисуем карточку
    card(ctx, person, x, y);

    // Рисуем линию вправо
    fromMeToSpouse(ctx, person, x, y);

    // Рисуем линию влево
    fromMeToSiblings(ctx, person, x, y);

    // Рисуем линию вверх
    // fromMeToOneParent(ctx, person, x, y);

    // Рисуем линию вверх к родителям
    fromMeToParents(ctx, person, x, y);

    // Обработчик клика по карточке
    this.canvas.addEventListener('click', (event: MouseEvent) => onCardClickHandler(event, person.id, x, y, this.canvas));
  }
}
