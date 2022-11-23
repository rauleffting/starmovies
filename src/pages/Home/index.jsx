import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Menu, NewMovie, Plus, Content } from './styles';

import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Input } from '../../components/Input';

export function Home() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes()
  }, [search]);

  function handlePreview(id){
    navigate(`/preview/${id}`);
  }

  return(
    <Container>
      <Header>
        <Input 
        placeholder="Pesquisar pelo título" 
        onChange={event => setSearch(event.target.value)}
        />
      </Header>

      <Menu>
        <h1>Meus filmes</h1>

        <NewMovie to='/new'>
          <Plus />
          <span>Adicionar filme</span>
        </NewMovie>
      </Menu>

      <Content className="content">
        <main>
          {
            notes &&
            notes.map( note => (
              <Movie 
                key={String(note.id)}
                data={note}
                onClick={() => handlePreview(note.id)}
                className="movie"
              />
            ))
          }
        </main>
      </Content>

    </Container>
  );
}
