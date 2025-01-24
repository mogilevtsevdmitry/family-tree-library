import { LINE_COLOR, RECT_HEIGHT, RECT_WIDTH } from '../constant'

export function fromMeToSpouse(ctx: CanvasRenderingContext2D, person: any, x: number, y: number) {
  const fromX = x + RECT_WIDTH
  const fromY = y + RECT_HEIGHT / 2
  const toX = fromX + RECT_HEIGHT / 2
  const toY = fromY

  // Установка цвета линии
  ctx.strokeStyle = LINE_COLOR

  // Рисуем линию
  ctx.beginPath()
  ctx.moveTo(fromX, fromY)
  ctx.lineTo(toX, toY)
  ctx.stroke()
}
