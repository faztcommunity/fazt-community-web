import React, { useState, useEffect } from 'react';
import axios from 'axios';
import get from 'lodash/get';
import MainPage from '@Templates/MainPage';
import styled from '@Styles/styled';
import Head from '@Molecules/Head';

// despues hay que separar bien el código asi no esta todo junto en este archivo. (eso para el final)
// CollaboratorTag seria un componente tonto xd es para despues pasarlo mas facil a prod  x d
// lo mismo que loading

type ConllaboratorTagProps = {
    id?:number,
    imagePath?:string,
    name?:string,
    github?:string,
    username?:string,
    userdescription?:string
  };  
  const StyledConllaboratorContainerTag = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  `
const StyledConllaboratorTag = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: max-content;
    height: max-content;
    padding: 30px 50px 30px 50px;
    margin:20px;
    background-color: #ffffff;
    filter: drop-shadow(0px 8px 10px rgba(120, 120, 120, 0.15));
    border-radius: 8px;
    h1{
        font-family: ${({ theme }) => theme.fontFamily.title};
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 16px;
        margin-bottom: 10px;
    }
    span{
        font-family: ${({ theme }) => theme.fontFamily.body};
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 15px;
        margin-bottom: 10px;
    }


    img{
        width:100px;
        height:100px;
        border-radius:200px;
        margin: 0px 0px 20px 0px;
    }
`;

const ConllaboratorTag =  (props:ConllaboratorTagProps) => {
    const {imagePath,name,github,username,userdescription} = props;
    return (    
       <StyledConllaboratorTag>
            <img src={imagePath ||'https://www.antiagingya.com/es/wp-content/uploads/2015/01/img-default-autores.jpg'} alt=""/>
                <h1>NOMBRE</h1>
                <span> {name}</span>
                <h1>GITHUB</h1>
                <span> {github}</span>
                <h1>USERNAME</h1>
                <span>{username}</span>
                <h1>DESCRIPTION</h1>
                <span>{userdescription}/</span>
       </StyledConllaboratorTag>  
    )
}
const Stylediv = styled.p`
//aqui dentro todo el css que quieran 
`;
const Loading = () => {
    return (
        <div className="">
            <h2>Cargando...</h2>
        </div>
    );
}

const collaborators = (props:ConllaboratorTagProps) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getData = async () => {  
          const result = await axios.get('https://api.faztcommunity.dev/collaborators').catch((e)=>console.log(e)); // URL endpoint espero que funcione sino no la pongo esta noche
          setItems(get(result, "data", []));
          setLoading(false);
      }
      getData();
    }, [])
    
    if(loading){
        return <Loading />
    }
    return (
       
       <MainPage>
           <Head title="Home" />
           <StyledConllaboratorContainerTag >
           { items ? items.map((item:ConllaboratorTagProps) => {
               return (
                   <ConllaboratorTag key={item.id} name={item.name} github={item.github} imagePath={item.imagePath} username={item.username} userdescription={item.userdescription} />
               )
           }): <h1>no se encuentran colaboradores</h1>}
           </StyledConllaboratorContainerTag>
       </MainPage>
      
    )
}

export default collaborators
