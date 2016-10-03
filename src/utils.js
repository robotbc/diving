import Color from 'color';

export const lighten = hex => Color(hex)
  .lighten(0.7)
  .hslString();
