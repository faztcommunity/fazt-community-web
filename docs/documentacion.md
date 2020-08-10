<h1 id="title" align="center">
<a href="#title" title="">
<img width="550px" height="40px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596685391/ReadMeFaztCommunity/DOCUMENTACION_FAZT_WEB_COMMUNITY_y4tgi3.svg" >
</a>
</h1><br/>

<div align="center">
<a href="https://discord.com/invite/37PHuNw" title="Fazt Community">
<img height="200px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596616586/ReadMeFaztCommunity/faztcommunity_xbhnox.svg" alt="Fazt Community">
</a>
</div><br/><br/>

<div align="center">
<a href="https://github.com/faztcommunity" title="Github">
<img height="40px" 	src="https://res.cloudinary.com/design-code-mx/image/upload/v1596591162/ReadMeFaztCommunity/github_boz1st.svg" alt="Github">
</a>&nbsp;
<a href="https://discord.com/invite/37PHuNw" title="Discord">
<img height="40px"	src="https://res.cloudinary.com/design-code-mx/image/upload/v1596590975/ReadMeFaztCommunity/discord_ctzgwd.svg" alt="Discord">
</a>&nbsp;
<a href="https://twitter.com/FaztTech" title="Twitter">
<img height="40px"	src="https://res.cloudinary.com/design-code-mx/image/upload/v1596590975/ReadMeFaztCommunity/twitter_zgr4p0.svg" alt="Twitter">
</a>&nbsp;
<a href="https://www.youtube.com/channel/UCMn28O1sQGochG94HdlthbA" title="Youtube">
<img height="40px"	src="https://res.cloudinary.com/design-code-mx/image/upload/v1596590975/ReadMeFaztCommunity/youtube_t59c99.svg" alt="Youtube">
</a>&nbsp;
</div><br/>

<h1></h1>
<div  align="center">

<a href="../README.md" title="Inicio">
<img height="40px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596733417/ReadMeFaztCommunity/INICIO_bigkq0.svg" alt="Inicio">
</a>&nbsp;
<a href="#tecnologic" title="Recursos">
<img height="40px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596617286/ReadMeFaztCommunity/Recursos_qd8fhf.svg" alt="Recursos">
</a>&nbsp;
<a href="./contribuir.md" title="Contribuir">
<img height="40px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596669401/ReadMeFaztCommunity/Contribuir_fdhen7.svg" alt="Contribuir">
</a>&nbsp;
<a href="./index.md" title="Documentación">
<img height="40px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596617286/ReadMeFaztCommunity/Documentacion_hfvtj8.svg" alt="Documentación"> 
</a>
&nbsp;
<a href="./contributors.md" title="Contribuidores">
<img height="40px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596668271/ReadMeFaztCommunity/Contribuidores_hkglu0.svg" alt="Contribuidores">
</a>&nbsp;
<a href="../LICENSE" title="Licencia">
<img height="40px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596672429/ReadMeFaztCommunity/licencia_ctu4nb.svg" alt="Licencia">
</a>

</div>
<h1></h1>

<h2 id="Structure" >
<a href="#Structure" title="Structure">
<img width="470px" height="30px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596731280/ReadMeFaztCommunity/Documentacion/ESTRUCTURA_DE_ARCHIVOS_Y_VARIABLES_uwd1dy.svg" >
</a>
</h2>

<span>

Estas instrucciones te permitirán observar la estructura de archivo del proyecto

</span>

<span>
<i> <b> 
File Structure
</i> </b>
</span>

<span>

```yml
.next
.storybook
doc
node_modules
src:
  - assets:
    - fonts:
    - img:
  - components:
    - atoms:
      - Component:
        - Component.stories.tsx
        - Component.test.tsx
        - index.tsx
    - molecules:
    - organism:
    - templates:
  - config:
    - jest
  - pages:
    - _app.tsx
    - file.tsx
  - styles:
    - global.tsx
    - theme.ts
    - styled.ts
eslintrc.js
.gitgnore
.prettierrc
.prettierignore
.huskyrc
.eslintignore
.eslintrc.js
LICENSE
next.config.js
next-env.d.ts
package.json
package-lock.json
babel.config.json
README.md
tsconfig.json
```

<span>
<i> <b> 
Name File and Folder
</i> </b>
<br/><br/>
</span>

<span>
Estructura de nombres para los Archivos y Folders del proyecto
</span>
<br/><br/>

<span>
<i><b>Ejemplo Nombre de Folders </b></i>

```
- folder
  - SubFolder
    - SubSubFolder
```

<span>

<span>
<i><b>Ejemplo Nombre para Archivos</b></i>

```yml
- Atom:
    - Atom.stories.tsx
    - Atom.test.tsx
    - index.tsx
- pages:
    - _app.tsx
    - home.tsx
    - about.tsx
    - index.tsx
```

<span>

</span>
<br/>
<h1></h1>

<h2>
<i> <b> 
Atomic Design
</i> </b>
</h2>

<span>
<i> <b> 
Atomic Design
</i> </b>
detalla todo lo que implica la creación y el mantenimiento de sistemas de diseño sólidos, lo que le permite implementar interfaces de usuario más consistentes y de mayor calidad más rápido que nunca.

<a href="https://atomicdesign.bradfrost.com/table-of-contents/" title="Atomic Design">
<i><b> Este libro </b></i>
</a>
presenta una metodología para pensar en nuestras IU como jerarquías reflexivas, analiza las cualidades de las bibliotecas de patrones efectivas y muestra técnicas para transformar el flujo de trabajo de diseño y desarrollo de su equipo.
</span>
<br/><br/>

<a href="https://atomicdesign.bradfrost.com/table-of-contents/" title="Atomic Design">
<i><b> Link de la documentación de Atomic Design </b></i>
</a> 
<br/><br/>

<a href="https://bradfrost.com/blog/post/extending-atomic-design/" title="Atomic Design">
<img width="100%" height="100%" src="https://bradfrost.com/wp-content/uploads/2019/07/atomic-design-tokens.png" >
</a><br/>

<a href="https://bradfrost.com/blog/post/extending-atomic-design/" title="Atomic Design">
<br>
<i><b> Link de la estructura de Atomic Design </b></i>
</a> 
<br/>

<h1></h1>

<h2>
<i> <b> 
Camel Case
</i> </b>
</h2>

<span>
<i> <b> 
Camel Case
</i> </b>
 (estilizado como <i><b> CamelCase </b></i>) o <i><b> caja camello </b></i> es un estilo de escritura que se aplica a frases o palabras compuestas. El nombre se debe a que las mayúsculas a lo largo de una palabra en CamelCase se asemejan a las jorobas de un <i><b> camello. </b></i> El nombre CamelCase se podría traducir como Mayúsculas/Minúsculas Camello. El término case se traduce como "caja tipográfica", que a su vez implica si una letra es mayúscula o minúscula y tiene su origen en la disposición de los tipos móviles en casilleros o cajas.
</span>
<br/><br/>

<span>
Existen dos tipos de CamelCase:
</span>

<ul>
  
<li>
<span><i><b>UpperCamelCase </b></i>
(más conocido como <span><i><b>PascalCase</b></i>), cuando la primera letra de cada una de las palabras es mayúscula
</span>
<br/><br/>
<span><i><b>Ejemplo: </b></i>
<i><b>

```
EjemploDeUpperCamelCase
```

</b></i>
</span>

</li>

<li>
<span><i><b>lowerCamelCase </b></i>
(o simplemente CamelCase), igual que la anterior con la excepción de que la primera letra es minúscula
</span>
<br/><br/>
<span><i><b>Ejemplo: </b></i>
<i><b>

```
ejemploDeLowerCamelCase
```

</b></i>
</span>

</li>

</ul>

<span>
<h1></h1>

<h2 id="Methodology" >
<a href="#Methodology" title="Methodology">
<img width="330px" height="30px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596731281/ReadMeFaztCommunity/Documentacion/METODOLOGIAS_DE_TRABAJO_sffwoz.svg" >
</a>
</h2>

<h2>
<i> <b> 
Scrum
</i> </b>
</h2>

<span>
<i> <b> 
¿Qué es SCRUM?
</i> </b>
Scrum es un proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente, en equipo, y obtener el mejor resultado posible de un proyecto. Estas prácticas se apoyan unas a otras y su selección tiene origen en un estudio de la manera de trabajar de equipos altamente productivos.
</span>
<br/><br/>
<h1></h1>

<h2 id="Methodology" >
<a href="#Methodology" title="Methodology">
<img width="360px" height="30px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596731284/ReadMeFaztCommunity/Documentacion/TECNOLOGIAS_DE_DESARROLLO_lsrxft.svg" >
</a>
</h2>

<h2>
<i> <b> 
Typescript
</i> </b>
</h2>

<span>
<i> <b> 
TypeScript  
</i> </b>
 es un lenguaje de código abierto que se basa en JavaScript, una de las herramientas más utilizadas del mundo, al agregar definiciones de tipo estático. Los tipos proporcionan una forma de describir la forma de un objeto, proporcionando una mejor documentación y permitiendo que <b>TypeScript</b> valide que su código funciona correctamente.
</span>
<br/><br/>
<a href="https://www.typescriptlang.org/docs/" title="TypeScript">
<i><b> Link de la documentación de TypeScript </b></i>
</a> 
<br/>
<h1></h1>

<h2>
<i> <b> 
React
</i> </b>
</h2>

<span>
<i> <b> 
React 
</i> </b>
(también llamada <b>React.js</b> o ReactJS) 
es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.
</span>
<br/><br/>
<a href="https://es.reactjs.org/docs/getting-started.html" title="React">
<i><b> Link de la documentación de React </b></i>
</a> 
<br/><br/>

<span>
<i> <b> 
Estructura de Componente Simple en React
</i> </b>
</span>
<br/>

```tsx
import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type ComponentProps = {
  text?: string;
};

const StyledComponent = styled.button<ComponentProps>`
  CSS
`;

const Component: React.SFC<ComponentProps> = ({ text }) => <StyledComponent>{text}</StyledComponent>;

Component.propTypes = {
  text: PropTypes.string
};

Component.defaultProps = {
  text: 'someText'
};

export default Component;
```

<br/>
<span>
<i> <b> 
Estructura de Componente Multiple en React
</i> </b>
</span>
<br/>

```tsx
import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type ComponentProps = {
  text?: string;
};

const StyledComponent = styled.button<ComponentProps>`
  CSS
`;

const ComponentPrimary: React.SFC<ComponentProps> = ({ text }) => <StyledComponent>{text}</StyledComponent>;

const ComponentSecondary: React.SFC<ComponentProps> = ({ text }) => <StyledComponent>{text}</StyledComponent>;

ComponentPrimary.propTypes = {
  text: PropTypes.string
};

ComponentPrimary.defaultProps = {
  text: 'someText'
};

ComponentSecondary.propTypes = {
  text: PropTypes.string
};

ComponentSecondary.defaultProps = {
  text: 'someText'
};

export { ComponentPrimary, ComponentSecondary };
```

<span>
<i> <b> 
React Snippets
</i> </b>
</span>
<br/>

<span>
<i> <b> 
ES7 React/Redux/GraphQL/React-Native snippets,
</i> </b>
esta extensión le proporciona fragmentos de JavaScript y React / Redux en ES7 con funciones de complemento de Babel para <b>VS Code</b> 
</span>
<br/><br/>
<table style="width:100%">
  <tr>
    <th>Prefix</th>
    <th>Method</th>
  </tr>
  <tr>
    <td>tsrnfi→</td>
    <td>Creates a React Native Arrow Function Component with ES7 module system and TypeScript interface/td>
  </tr>

</table>

<br/><br/>
<a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets" title="ES7 React">
<i><b> Link de ES7 React/Redux/GraphQL/React-Native snippets </b></i>
</a>
<br/>

<h1></h1>

<h2>
<i> <b> 
Emotion
</i> </b>
</h2>

<span>
<i> <b> 
Emotion
</i> </b>
es una libreria diseñada para la escritura de estilos en javascript (CSS-in-JS)
</span>
<br/><br/>
<a href="https://emotion.sh/docs/introduction" title="Emotion">
<i><b> Link de la documentación de Emotion </b></i>
</a> 
<br/><br/>

<span>
<i> <b> 
Estructura de un Componente Styled
</i> </b>
<br/>

```tsx
import styled from '@Styles/styled';

// With Props

type ComponentProps = {};

const StyledComponent = styled.div<ComponentProps>`
  CSS
`;

// Without Props

const StyledComponent = styled.div`
  CSS
`;
```

<br/>
<h1></h1>

<h2>
<i> <b> 
Storybook
</i> </b>
</h2>

<span>
<i> <b> 
Storybook
</i> </b>
es una herramienta de código abierto para desarrollar componentes de UI en aislamiento para React, Vue, Angular, Svelte y más. 
Hace que la construcción de impresionantes componentes de UI sea organizada y eficiente.
</span>
<br/><br/>
<a href="https://storybook.js.org/docs/basics/introduction/" title="Storybook">
<i><b> Link de la documentación de Storybook </b></i>
</a> 
<br/><br/>

<span>
<i><b>Ejemplo de Archivo Storybook Component.stories.tsx</b></i>

```tsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';

storiesOf('Component', module)
  .addParameters({ componentSubtitle: 'subtitle', component: Component })
  .add('component with text', () => <Component text="test" />);
```

</span>

<a href="https://storybook.js.org/docs/basics/introduction/" title="Storybook">
<img width="100%" height="100%" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596767658/ReadMeFaztCommunity/Anotaci%C3%B3n_2020-08-06_193354_wzosym.png" >
</a>
<br/>
<h1></h1>

<h2>
<i> <b> 
Jest
</i> </b>
</h2>

<span>
<i> <b> 
Jest
</i> </b>
es un encantador marco de pruebas de JavaScript con un enfoque en la simplicidad.
¡Funciona con proyectos que usan: Babel, TypeScript, Node, React, Angular, Vue, Svelte y más!
</span>
<br/><br/>
<a href="https://jestjs.io/docs/en/getting-started" title="Jest">
<i><b> Link de la documentación de Jest </b></i>
</a> 
<br/><br/>

<span>
<i><b>Ejemplo de Archivo Jest Component.test.tsx</b></i><br/>
Test Para Verificar un Prop en un Componente

```tsx
import React from 'react';
import { mount } from 'enzyme';
import Component from '.';

describe('Props', () => {
  it('render with the text prop', () => {
    const text = 'Some Text';
    const wrap = mount(<Component text={text} />);
    expect(wrap.find('Component').text()).toBe(text);
  });
});
```

</span>

<span>
<i><b>Ejemplo de Archivo Jest Component.test.tsx</b></i><br/>
Test Para Verificar un Componente CheckBox

```tsx
import React from 'react';
import { mount } from 'enzyme';
import CheckboxWithLabel from '.';

describe('Change Handler', () => {
  it('changes the text after click', () => {
    const checkbox = mount(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
  });
});
```

</span>

<span>
<i><b>Ejemplo de Archivo Jest Component.test.tsx</b></i><br/>
Test con varios grupos

```tsx
import React from 'react';
import { mount } from 'enzyme';
import Login from '.';

const login = mount(<Login />);

describe('Mount', () => {
  it('login disabled by default', () => {
    expect(login.find('input[type="button"]').prop('disabled')).toBeTruthy();
  });
});

describe('Change Handler', () => {
  it('login enabled with valid values', () => {
    login.find('input[type="password"]').simulate('change', {
      target: {
        value: 'validpassword'
      }
    });
    expect(login.find('input[type="button"]').prop('disabled')).toBeFalsy();
  });
});

describe('Blur Handler', () => {
  it('login disabled with invalid values', () => {
    login.find('input[type="email"]').simulate('blur', {});

    expect(login.find('input[type="button"]').prop('disabled')).toBeTruthy();
  });
});
```

</span>

<h1></h1>

<h2 id="HowContribute" >
<a href="#HowContribute" title="HowContribute">
<img width="410px" height="30px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596731444/ReadMeFaztCommunity/Contribuir/CONTRIBUIR_A_FAZT_COMMUNITY_fvwkz5.svg" >
</a>
</h2>

<span>
Por favor lee la guía para
<a href="./doc/contribuir.md">
<span>
<b>
<i> 
contribuir
</i> 
</b>
</span>
</a>
y así conocer los detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.
</span><br/><br/>

<div align="center">
<a href="./doc/contribuir.md" title="Contribuir">
<img height="40px" src="https://res.cloudinary.com/design-code-mx/image/upload/v1596669401/ReadMeFaztCommunity/Contribuir_fdhen7.svg" alt="Contribuir">
</a>

<h1></h1>
