import { Container, MovieHeading, Rating, Author, Info } from './styles';

import { RiStarLine, RiStarFill, RiTimeLine } from 'react-icons/ri';

import { Tag } from '../Tag';

export function MoviePreview({ data, ...rest }) {
  return(
    <Container {...rest}>
      <MovieHeading>
        <h1>{data.title}</h1>

        <Rating>
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarFill />
          <RiStarLine />
        </Rating>
      </MovieHeading>

      <Author>
        <img src="https://github.com/rauleffting.png" alt="Author photo" />
        <span>Por {data.author}</span>
        <RiTimeLine />
        <span>{data.date}</span>
      </Author>

      {
        data.tags &&
        <div>
          {
            data.tags.map( tag => 
            <Tag key={tag.id} name={tag.name}/>
            )
          }
        </div>
      }

      <Info>
        {data.info}
      </Info>
      
    </Container>
  );
}