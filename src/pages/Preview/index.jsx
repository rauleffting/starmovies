import { Container, Content, Menu, MovieHeading, Rating, Author, Info } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import avatarPlaceHolder from '../../assets/avatar_placeholder.png';

import { RiStarLine, RiStarFill, RiTimeLine } from 'react-icons/ri';

import { Tag } from '../../components/Tag';

export function Preview() {
  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data);
    }

    fetchNote();
  }, [])

  return(
    <Container>
      <Header />

      <Menu>
        <ButtonText 
          title="Voltar" 
          onClick={handleBack}
        />
      </Menu>

      <Content className="content">
        {
          data &&
          <main>
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
              <img src={avatarUrl} alt="Author photo" />
              <span>Por {user.name}</span>
              <RiTimeLine />
              <span>{user.created_at}</span>
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
              {data.comments}
            </Info>
          </main>
        }
      </Content>
    </Container>
  );
}