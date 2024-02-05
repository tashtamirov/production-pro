import React from 'react';

export const AboutPageLazy = React.lazy(() => new Promise(resolve => {
  //@ts-ignore
  //ТАКУЮ ЗАПИСЬ В РЕАЛЬНОМ ПРОЕКТЕ НЕ ДЕЛАТЬ! ПОТОМ ПО ХОДУ КУРСА ПЕРЕДЕЛАЕТСЯ
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}))