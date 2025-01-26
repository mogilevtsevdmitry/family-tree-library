import { LINE_COLOR } from '../constant';

export function fromMeToSiblings(
  ctx: CanvasRenderingContext2D,
  fromX: number,
  toX: number,
  y: number,
) {
  // Установка цвета линии
  ctx.strokeStyle = LINE_COLOR;
  ctx.beginPath();
  ctx.moveTo(fromX, y);
  ctx.lineTo(toX, y);

  ctx.stroke();
}
