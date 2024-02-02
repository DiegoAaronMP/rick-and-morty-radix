import React from 'react'
import ReactDOM from 'react-dom/client'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { RickAndMortyApp } from './RickAndMortyApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="gray" grayColor="slate">
      <RickAndMortyApp />
    </Theme>
  </React.StrictMode>,
)
