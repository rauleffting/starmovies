import { Container } from './styles';

export function Button({ title, bgBlack, ...rest}) {
  return(
    <Container
      type="button"
      bgBlack={bgBlack}
      {...rest}
    >
      {title}
    </Container>
  );
}