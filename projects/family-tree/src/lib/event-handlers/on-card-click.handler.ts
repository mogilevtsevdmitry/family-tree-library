import {RECT_HEIGHT, RECT_WIDTH} from "../constant";

export function onCardClickHandler(event: MouseEvent, id: number, x: number, y: number, canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  if (
    clickX >= x &&
    clickX <= x + RECT_WIDTH &&
    clickY >= y &&
    clickY <= y + RECT_HEIGHT
  ) {
    console.log(`Card clicked! ID: ${id}`);
  }
}
