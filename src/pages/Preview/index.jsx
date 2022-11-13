import { Container, Content, Menu } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { MoviePreview } from '../../components/MoviePreview';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import avatarPlaceHolder from '../../assets/avatar_placeholder.png';

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
      const response = await api.get(`/movie_notes/${params.id}`)
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

      <Content>
        {
          data &&
          <MoviePreview data={{
            title: data.title,
            rating: data.rating,
            info: data.comments,
            tags: data.tags,
            author: user.name,
            avatar: avatarUrl,
            date: '23/05/22 às 08:00'
          }}/>
        }
      </Content>
    </Container>
  );
}