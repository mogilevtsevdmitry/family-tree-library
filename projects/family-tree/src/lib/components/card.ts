import {RECT_HEIGHT, RECT_WIDTH} from "../constant";

export function card(
  ctx: CanvasRenderingContext2D,
  person: any,
  x: number,
  y: number,
) {
  const height = RECT_HEIGHT
  const width = RECT_WIDTH
  const { photoSrc, lastName, firstName, middleName, birthDate, deathDate } = person;
  const radius = 10
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();

  ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.shadowColor = 'transparent'; // Убираем тень после рисования


  // Рисуем фото
  const photoHeight = RECT_HEIGHT / 2;
  const img = new Image();
  img.src = photoSrc || '';
  img.onload = () => {
    ctx.drawImage(img, x, y, RECT_WIDTH, photoHeight); // Рисуем изображение

    // Рисуем текст
    const textX = x + RECT_WIDTH / 2;
    let textY = y + photoHeight + 40;

    // Фамилия
    ctx.fillStyle = '#393A3A';
    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(lastName, textX, textY);

    // Имя
    textY += 30;
    ctx.fillText(firstName, textX, textY);

    // Отчество (если есть)
    if (middleName) {
      textY += 30;
      ctx.fillText(middleName, textX, textY);
    }

    // Даты
    if (birthDate || deathDate) {
      textY += 30;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'; // Более светлый цвет
      ctx.font = 'normal 16px Arial';
      const dates = `${birthDate || ''}${deathDate ? ' - ' + deathDate : ''}`;
      ctx.fillText(dates, textX, textY);
    }
  };
}
