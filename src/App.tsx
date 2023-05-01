import React from 'react';
import './App.css';
import { Button, Link, Container, Input } from './components/ui/atoms';

function App() {
  return (
    <Container>
      <Button>Button</Button>
      <Link type="text">go to </Link>
      <Input type='email'/>
    </Container>
  );
}

export default App;
