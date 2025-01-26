import { LINE_COLOR, RECT_HEIGHT, RECT_WIDTH } from '../constant';

export const fromMeToParentLines = (
  ctx: CanvasRenderingContext2D,
  startX: number,
  startY: number,
  parentCount: number
): { x: number; y: number }[] => {
  const endDots: { x: number; y: number }[] = [];
  // Установка цвета линии
  ctx.strokeStyle = LINE_COLOR;

  let fromX = startX + RECT_WIDTH / 2;
  const fromY = startY;
  let toY = fromY - RECT_HEIGHT / 2;

  if (parentCount === 1) {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(fromX, toY);
    ctx.stroke();
    endDots.push({ x: fromX, y: toY });
    return endDots;
  }

  toY = fromY - RECT_HEIGHT / 4;
  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(fromX, toY);
  const xLength = RECT_WIDTH * parentCount + parentCount * 10 - RECT_WIDTH;
  fromX = fromX - xLength / 2;
  ctx.moveTo(fromX, toY);
  ctx.lineTo(fromX + xLength, toY);
  for (let i = 0; i < parentCount; i++) {
    ctx.moveTo(fromX, toY);
    ctx.lineTo(fromX, toY - RECT_HEIGHT / 4);
    endDots.push({ x: fromX, y: toY - RECT_HEIGHT / 2 });
    fromX += xLength / (parentCount - 1);
  }
  ctx.stroke();
  return endDots;
};
