import React, { useState } from 'react';
import { ValidationError } from 'yup';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';

// Initial Form State
const initialFormValues = {
  name: '',
  email: '',
  size: '',
  sauce: '',
  top1: false,
  top2: false,
  top3: false,
  top4: false,
  top5: false,
  top6: false,
  top7: false,
  top8: false,
  top9: false,
  top10: false,
  top11: false,
  top12: false,
  top13: false,
  top14: false,
  special: '',
};

// Initial Submit Order Button State
const initialDisabled = true;

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path='/order'>
          <Form values={formValues} change={inputChange} disabled={disabled} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}
