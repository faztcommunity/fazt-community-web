import Icon from '@Atoms/Icon';
import Button from '@Atoms/Button';
import UserImage from '@Atoms/UserImage';
import Description from '@Atoms/Description';

export default function Home() {
  return (
    <>
      <Button text="Hola Mundo" variant="fill" color="secondary" />
      <Button text="Hola Mundo" variant="outline" color="primary" />
      <Button text="Hola Mundo" variant="outline" color="secondary" />
      <Button text="Hola Mundo" variant="fill" color="primary" />
      <Button text="Hola Mundo" variant="fill" color="secondary" size="lg" />
      <Button text="Hola Mundo" variant="fill" color="secondary" size="xsm" />
      <Button text="Hola Mundo" variant="outline" color="secondary" size="rl" />
      <Button text="Hola Mundo" variant="fill" color="primary" size="sm" />
      <Button text="Hola Mundo" variant="outline" color="primary" size="xsm" />

      <UserImage size="sm" src="http://www.w3.org/2008/site/images/logo-w3c-screen-lg'" />
      <UserImage size="sm" variant="round" src="https://homepages.cae.wisc.edu/~ece533/images/cat.png" />
      <UserImage size="lg" src="http://www.w3.org/2008/site/images/logo-w3c-screen-lg'" />
      <UserImage size="lg" variant="round" src="https://homepages.cae.wisc.edu/~ece533/images/cat.png" />
      <Icon icon="api" size="rl" />
      <Icon icon="discord" size="rl" />
      <Icon icon="github" size="rl" />
      <Icon icon="web" size="rl" />
      <Icon icon="database" size="rl" />
      <Icon icon="bot" size="rl" />
      <Icon icon="api" size="sm" />
      <Icon icon="discord" size="sm" />
      <Icon icon="github" size="sm" />
      <Icon icon="web" size="sm" />
      <Icon icon="database" size="sm" />
      <Icon icon="bot" size="sm" />
      <Icon icon="bot" />

      <Description>
        Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
        personas de todo el mundo hispano hablante.
      </Description>
      <Description size="lg">
        Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
        personas de todo el mundo hispano hablante.
      </Description>
      <Description size="md">
        Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
        personas de todo el mundo hispano hablante.
      </Description>
      <Description center>
        Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
        personas de todo el mundo hispano hablante.
      </Description>
      <Description size="lg" center>
        Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
        personas de todo el mundo hispano hablante.
      </Description>
      <Description size="md" center>
        Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
        personas de todo el mundo hispano hablante.
      </Description>
      <div style={{ background: '#2C9BEB' }}>
        <Description white>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </Description>
        <Description size="lg" white>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </Description>
        <Description size="md" white>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </Description>
        <Description center white>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </Description>
        <Description size="lg" center white>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </Description>
        <Description size="md" center white>
          Fazt Community es un espacio donde podrás crecer como profesional, participando en equipos y con
          personas de todo el mundo hispano hablante.
        </Description>
      </div>
    </>
  );
}
