import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Menu, Content, Form, InputWrapper, TextArea, Markers, Buttons } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Marker } from '../../components/Marker';
import { Button } from '../../components/Button';

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deletedTag){
    setTags(prevState => prevState.filter(tag => tag !== deletedTag))
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota.")
    }

    if(!rating || rating > 5 || rating < 0){
      return alert("Dê uma nota de 0 a 5.")
    }

    if(newTag){
      return alert("Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }

    await api.post("/notes", {
      title,
      rating,
      comments,
      tags
    });

    alert("Filme cadastrado com sucesso!");
    navigate(-1);
  }

  function handleRemoveNote(){
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

      <Content className="content">
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
                tags.map((tag, index) => (
                  <Marker
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemovetag(tag)}
                  />
                ))
              }
              <Marker
                isNew 
                placeholder="Novo marcador"
                value={newTag}
                onChange={event => setNewTag(event.target.value)}
                onClick={handleAddTag}
              />
            </Markers>

          <Buttons>
            <Button 
              bgBlack 
              title="Excluir filme"
              onClick={handleRemoveNote}
            />
            <Button 
              title="Salvar alterações"
              onClick={handleNewNote}
            />
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
}