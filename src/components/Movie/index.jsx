import { Container, Rating } from './styles';
import { Tag } from '../Tag';

import { RiStarLine, RiStarFill } from 'react-icons/ri';

export function Movie({ data, ...rest }) {
  return(
      <Container {...rest}>
        <h1>{data.title}</h1>
        
          {
            data.rating == 0 && (
              <Rating>
                <RiStarLine />
                <RiStarLine />
                <RiStarLine />
                <RiStarLine />
                <RiStarLine />
              </Rating>
            )
          }
          {
            data.rating == 1 && (
              <Rating>
                <RiStarFill />
                <RiStarLine />
                <RiStarLine />
                <RiStarLine />
                <RiStarLine />
              </Rating>
            )
          }
          {
            data.rating == 2 && (
              <Rating>
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
                <RiStarLine />
                <RiStarLine />
              </Rating>
            )
          }
          {
            data.rating == 3 && (
              <Rating>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
                <RiStarLine />
              </Rating>
            )
          }
          {
            data.rating == 4 && (
            <Rating>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarLine />
            </Rating>
            )
          }
          {
            data.rating == 5 && (
            <Rating>
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </Rating>
            )
          }
          
        <span>{data.comments}</span>

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