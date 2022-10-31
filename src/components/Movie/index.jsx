import { Container, Rating } from './styles';
import { Tag } from '../Tag';

import { RiStarLine, RiStarFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

export function Movie({ data, ... rest }) {
  return(
      <Container {...rest} to="preview">
        <h1>{data.title}</h1>

        <Rating>
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarLine />
        </Rating>

        <span>{data.info}</span>

        {
          data.tags &&
          <footer>
            {
              data.tags.map( tag => 
                <Tag key={tag.id} name={tag.name}/>  
              )
            }
          </footer>
        }
    </Container>
  );
}