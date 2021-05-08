/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import StyledImage from "./StyledImage";
import {BookTitle} from "./common";
import theme from "../constants/theme";

const styles = {
  wrapper: css`
    display: flex;
    margin-top: 25px;
  `,
  text: css`
    color: ${theme.spaceBlue};
    text-align: left;
  `,
  imageWrapper: css`
    margin-right: 15px;
    width: 150px;
    height: 100%;
  `,
  infoWrapper: css`
    width: calc(100vw - 165px);
  `,
  subtitle: css`
    font-size: 20px;
  `
}

const BookItem = (props) => {
  const {
    image,
    title,
    authors,
    year,
    description,
    url
  } = props;

  const authorsList = authors.join(', ')

  return (
    <div
      css={styles.wrapper}
    >
      <div
        css={styles.imageWrapper}
      >
        <StyledImage src={image} height="150px" />
      </div>
      <div
        css={styles.infoWrapper}
      >
        <BookTitle
          url={url}
        >
          {title}
        </BookTitle>
        <div
          css={css`
            ${styles.text}
            ${styles.subtitle}
          `
          }
        >
          <span>{authorsList}</span>
          &nbsp;·&nbsp;
          <span>{year}</span>
        </div>
        <p
          css={styles.text}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
