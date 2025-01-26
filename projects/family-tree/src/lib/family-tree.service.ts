import { Injectable } from '@angular/core';
import { card } from './components/card';
import { fromMeToChildrenLines } from './components/from-me-to-children-lines';
import { fromMeToParentLines } from './components/from-me-to-parent-lines';
import { fromMeToSpouse } from './components/from-me-to-spouse';
import { RECT_HEIGHT, RECT_WIDTH } from './constant';
import { onCardClickHandler } from './event-handlers/on-card-click.handler';
import { TreeNode, TreeNodes } from './interface';
import { fromMeToSiblings } from './components/from-me-to-siblings';

@Injectable({
  providedIn: 'root',
})
export class FamilyTreeService {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  constructor() {}

  drawCards(persons: TreeNodes | null, canvas: HTMLCanvasElement) {
    if (!persons) return;
    this.canvas = canvas;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    const startX = window.innerWidth / 2 - RECT_WIDTH / 2;
    const startY = window.innerHeight / 2 - RECT_HEIGHT / 2;

    this.ctx = canvas.getContext('2d')!;

    this.drawCard(persons.me, startX, startY);

    if (persons.parents.length) {
      this.drawParents(persons.parents, startX, startY);
    }

    if (persons.spouseAndSiblings.length) {
      const spouse = persons.spouseAndSiblings.find((item) =>
        ['HUSBAND', 'WIFE'].includes(item.relation!)
      );
      if (spouse) {
        fromMeToSpouse(this.ctx, spouse, startX, startY);
        this.drawCard(spouse, startX + RECT_WIDTH + 20, startY);
      }

      const siblings = persons.spouseAndSiblings.filter((el) =>
        ['SISTER', 'BROTHER'].includes(el.relation!)
      );
      if (siblings.length) {
        let fromX = startX - RECT_WIDTH - 40;
        siblings.forEach((el, idx) => {
          fromX = idx === 0 ? fromX : fromX - RECT_WIDTH - 20;
          const lineFromX = idx === 0 ? startX : fromX + RECT_WIDTH + 20;
          const lineToX = idx === 0 ? lineFromX - 40 : lineFromX - 20;
          fromMeToSiblings(
            this.ctx,
            lineFromX,
            lineToX,
            startY + RECT_HEIGHT / 2
          );
          this.drawCard(el, fromX, startY);
        });
      }
    }

    if (persons.children.length) {
      this.drawChildren(persons.children, startX, startY);
    }
  }

  private drawParents(parents: TreeNode[], startX: number, startY: number) {
    const endDots = fromMeToParentLines(
      this.ctx,
      startX,
      startY,
      parents.length
    );
    endDots.forEach((dot, idx) => {
      this.drawCard(
        parents[idx],
        dot.x - RECT_WIDTH / 2,
        dot.y - (RECT_HEIGHT / 4) * 3
      );
    });
  }

  private drawChildren(children: TreeNode[], startX: number, startY: number) {
    // Рисуем линию вниз к детям
    const endDots = fromMeToChildrenLines(
      this.ctx,
      startX,
      startY,
      children.length
    );
    endDots.forEach((dot, idx) => {
      this.drawCard(children[idx], dot.x - RECT_WIDTH / 2, dot.y);
    });
  }

  private drawCard(person: TreeNode, x: number, y: number): void {
    // Рисуем карточку
    card(this.ctx, person, x, y);

    // Обработчик клика по карточке
    this.canvas.addEventListener('click', (event: MouseEvent) =>
      onCardClickHandler(event, person.id, x, y, this.canvas)
    );
  }
}
