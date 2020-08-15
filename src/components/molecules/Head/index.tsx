import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

type HeadProps = {
  title: string;
  description?: string;
};

const DEFAULT_DESCRIPTION =
  'Crece como profesional compartiendo tus conocimientos con los demás y participando en proyectos Open Source.';
const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const Head: React.FC<HeadProps> = ({ title, description }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <title>{`Fazt Community | ${capitalize(title)}`}</title>
    <meta name="description" content={description} />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <meta name="theme-color" content="#262626" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Fazt Community" />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/images/preview__fazt-community.png" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://faztcommunity.dev" />
    <meta property="og:site_name" content="Fazt Community" />
    <meta property="og:title" content={`Fazt Community | ${capitalize(title)}`} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/images/preview__fazt-community.png" />

    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />

    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
      as="style"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap" />

    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
      as="style"
    />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

Head.defaultProps = {
  description: DEFAULT_DESCRIPTION
};

export default Head;
