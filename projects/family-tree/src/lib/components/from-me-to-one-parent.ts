import { LINE_COLOR, RECT_HEIGHT, RECT_WIDTH } from '../constant'

export function fromMeToOneParent(ctx: CanvasRenderingContext2D, person: any, x: number, y: number) {
  const fromX = x + RECT_WIDTH / 2
  const fromY = y
  const toX = fromX
  const toY = fromY - RECT_HEIGHT / 2

  // Установка цвета линии
  ctx.strokeStyle = LINE_COLOR

  // Рисуем линию
  ctx.beginPath()
  ctx.moveTo(fromX, fromY)
  ctx.lineTo(toX, toY)
  ctx.stroke()
}
