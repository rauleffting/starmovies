import { Container } from './styles';

export function Button({ title, del, ...rest}) {
  return(
    <Container
      type="button"
      del={del}
      {...rest}
    >
      {title}
    </Container>
  );
}