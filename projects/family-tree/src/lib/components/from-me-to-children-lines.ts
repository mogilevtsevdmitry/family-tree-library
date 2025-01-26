import { LINE_COLOR, RECT_HEIGHT, RECT_WIDTH } from '../constant';

export const fromMeToChildrenLines = (
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  childCount: number
): { x: number; y: number }[] => {
  const endDots: { x: number; y: number }[] = [];
  // Установка цвета линии
  ctx.strokeStyle = LINE_COLOR;

  let fromX = startX + RECT_WIDTH / 2;
  const fromY = startY + RECT_HEIGHT;
  let toY = fromY + RECT_HEIGHT / 2;

  if (childCount === 1) {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(fromX, toY);
    ctx.stroke();
    endDots.push({ x: fromX, y: toY });
    return endDots;
  }

  toY = fromY + RECT_HEIGHT / 4;
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(fromX, toY);
  const xLength = RECT_WIDTH * childCount + childCount * 10 - RECT_WIDTH;
  fromX = fromX - xLength / 2;
  ctx.moveTo(fromX, toY);
  ctx.lineTo(fromX + xLength, toY);
  for (let i = 0; i < childCount; i++) {
    ctx.moveTo(fromX, toY);
    ctx.lineTo(fromX, toY + RECT_HEIGHT / 4);
    endDots.push({ x: fromX, y: toY + RECT_HEIGHT / 4 });
    fromX += xLength / (childCount - 1);
  }
  ctx.stroke();
  return endDots;
};
