import { Container } from './styles';
import { RiArrowLeftLine } from "react-icons/ri";

export function ButtonText({ title, isActive = false, ...rest }) {
  return(
    <Container
    type="button"
    isActive={isActive}
    {...rest}
    to="#"
    >
      <RiArrowLeftLine />
      {title}
    </Container>
  );
}