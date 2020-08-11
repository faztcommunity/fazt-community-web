import Button from '@Atoms/Button';
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
