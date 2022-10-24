import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from './components/Button';
import Input from './components/Input';
import Title from './components/Title';

function App() {
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  return (
    <Container >
      <Title />
      <Input
        user={user}
        password={password}
        setUser={setUser}
        setPassword={setPassword} />
      <Button disabled={!(password === "2525")} />
    </Container>
  );
}

export default App;
