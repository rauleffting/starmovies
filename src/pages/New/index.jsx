import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Menu, Form, InputWrapper, TextArea, Markers, Buttons } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Marker } from '../../components/Marker';
import { Button } from '../../components/Button';

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const [markers, setMarkers] = useState([]);
  const [newMarker, setNewMarker] = useState("");

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  function handleAddMarker(){
    setMarkers(prevState => [...prevState, newMarker]);
    setNewMarker("");
  }

  function handleRemoveMarker(deletedMarker){
    setMarkers(prevState => prevState.filter(marker => marker !== deletedMarker))
  }

  async function handleNewMovieNote(){
    if(!title){
      return alert("Digite o título da nota.")
    }

    if(!rating || rating > 5 || rating < 0){
      return alert("Dê uma nota de 0 a 5.")
    }

    if(newMarker){
      return alert("Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post("/movie_notes", {
      title,
      rating,
      comments,
      markers
    });

    alert("Filme cadastrado com sucesso!");
    navigate(-1);
  }

  return(
    <Container>
      <Header />

      <Menu>
        <ButtonText 
          title="Voltar" 
          onClick={handleBack}
        />
      </Menu>

      <main>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <InputWrapper>
            <Input 
              type="text" 
              placeholder="Título"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <Input 
              type="text" 
              placeholder="Sua nota (de 0 a 5)"
              value={rating}
              onChange={event => setRating(event.target.value)}
            />
          </InputWrapper>
          
          <TextArea 
            placeholder="Observações"
            value={comments}
            onChange={event => setComments(event.target.value)}  
          />

          <h2>Marcadores</h2>

            <Markers>
              {
                markers.map((marker, index) => (
                  <Marker 
                    key={String(index)}
                    value={marker}
                    onClick={() => handleRemoveMarker(marker)}
                  />
                ))
              }
              <Marker 
                isNew 
                placeholder="Novo marcador"
                value={newMarker}
                onChange={event => setNewMarker(event.target.value)}
                onClick={handleAddMarker}
              />
            </Markers>

          <Buttons>
            <Button bgBlack title="Excluir filme"/>
            <Button 
              title="Salvar alterações"
              onClick={handleNewMovieNote}
            />
          </Buttons>
        </Form>
      </main>
    </Container>
  );
}