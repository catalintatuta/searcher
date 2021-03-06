import styled from "@emotion/styled";
import theme from "../../../constants/theme";

export const MyTitle = styled.a`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: ${theme.purple};
  text-decoration: none;
  margin-bottom: 15px;
  display: block;

  &:link,&:visited {
    color: ${theme.purple};
  }
  &:hover,&:active {
    color: ${theme.blue};
  }
`

