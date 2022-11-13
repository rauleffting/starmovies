import { Container, MovieHeading, Rating, Author, Info } from './styles';
import { RiStarLine, RiStarFill, RiTimeLine } from 'react-icons/ri';

import { Tag } from '../Tag';


export function MoviePreview({ data, ...rest }) {


  return(
    <Container {...rest}>
      <MovieHeading>
        <h1>{data.title}</h1>

        <Rating>
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
        </Rating>
      </MovieHeading>

      <Author>
        <img src={data.avatar} alt="Author photo" />
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