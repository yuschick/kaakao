import classNames from 'classnames';
import { HTMLAttributes } from 'react';

import { WithChildren } from '../../types/utils';

import styles from './VisuallyHidden.module.css';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
}

export function VisuallyHidden({
  as = 'span',
  children,
  ...htmlAttributes
}: WithChildren<Props>) {
  const { className } = htmlAttributes;
  const Element = as;

  return (
    <Element
      {...htmlAttributes}
      className={classNames(className, styles.visuallyHidden)}
    >
      {children}
    </Element>
  );
}
