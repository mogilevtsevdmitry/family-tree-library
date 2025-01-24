import { LINE_COLOR, RECT_HEIGHT } from '../constant'

export function fromMeToSiblings(ctx: CanvasRenderingContext2D, person: any, x: number, y: number) {
  const fromY = y + RECT_HEIGHT / 2
  const toX = x - RECT_HEIGHT / 2
  const toY = fromY

  // Установка цвета линии
  ctx.strokeStyle = LINE_COLOR

  // Рисуем линию
  ctx.beginPath()
  ctx.moveTo(x, fromY)
  ctx.lineTo(toX, toY)
  ctx.stroke()
}
