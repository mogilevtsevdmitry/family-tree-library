import { RECT_WIDTH } from '../constant';
import { TreeNode } from '../interface';

export const relationBadge = (
  ctx: CanvasRenderingContext2D,
  person: TreeNode,
  startX: number,
  startY: number
) => {
  const text = {
    HUSBAND: 'муж',
    WIFE: 'жена',
    FATHER: 'отец',
    MOTHER: 'мать',
    SON: 'сын',
    DAUGHTER: 'дочь',
    BROTHER: 'брат',
    SISTER: 'сестра',
    null: 'Я',
  };
  const radius = 10;

  // Рисуем badge
  const textLength = person.relation ? text[person.relation].length * 10 : 30;
  const x1 = startX + RECT_WIDTH - textLength;
  const x2 = startX + RECT_WIDTH;
  const y1 = startY;
  const y2 = startY + 20;
  ctx.beginPath();
  ctx.moveTo(x1 + radius, y1);
  ctx.lineTo(x2 - radius, y1);
  ctx.arcTo(x2, y1, x2, y1 + radius, radius);
  ctx.lineTo(x2, y2 - radius);
  ctx.arcTo(x2, y2, x2 - radius, y2, radius);
  ctx.lineTo(x1 + radius, y2);
  ctx.arcTo(x1, y2, x1, y2 - radius, radius);
  ctx.lineTo(x1, y1 + radius);
  ctx.arcTo(x1, y1, x1 + radius, y1, radius);
  ctx.fillStyle = '#3d7a8d';
  ctx.fill();
  ctx.restore();

  const textX = startX + RECT_WIDTH - textLength + radius + 10;
  const textY = startY + 13;
  ctx.fillStyle = 'white';
  ctx.font = 'regular 12x Arial';
  ctx.textAlign = 'center';
  ctx.fillText(text[person.relation!], textX, textY);
};
