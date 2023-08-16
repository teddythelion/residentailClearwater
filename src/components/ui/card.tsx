import { ChildrenType } from '@/utils/globalTypes';

const style = {
  card: `relative flex flex-col rounded-lg shadow-custom`,
  cardBody: `block flex-grow flex-shrink px-3 py-5`,
  cardTitle: `font-semibold text-custom dark:text-white mb-3`,
  CardTitleButton: `h-10 px-5 m-2 text-green-100  bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800`,
};

const inlineStyle = {
  boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};

function Card({ children }: ChildrenType) {
  return <div className={style.card}>{children}</div>;
}

function CardBody({ children }: ChildrenType) {
  return <div className={style.cardBody}>{children}</div>;
}

function CardTitle({ children }: ChildrenType) {
  return <button className={style.cardTitle}>{children}</button>;
}
function CardTitleButton({ children }: ChildrenType) {
  return <button className={style.CardTitleButton}>{children}</button>;
}

export { Card, CardBody, CardTitle, CardTitleButton };
