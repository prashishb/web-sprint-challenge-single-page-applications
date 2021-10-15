import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import schema from './validations/formSchema';
import * as yup from 'yup';
import axios from 'axios';
import Confirmation from './components/Confirmation';

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

// Initial Form Error State
const initialFormErrors = {
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

// Initial Order State
const initialOrder = [];

export default function App() {
  // States
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [order, setOrder] = useState(initialOrder);
  const [disabled, setDisabled] = useState(initialDisabled);

  // Helpers
  const postNewOrder = (newOrder) => {
    axios
      .post('https://reqres.in/api/orders', newOrder)
      .then((res) => {
        setOrder([res.data, ...order]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  // Event Handlers
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.size,
      top1: formValues.top1,
      top2: formValues.top2,
      top3: formValues.top3,
      top4: formValues.top4,
      top5: formValues.top5,
      top6: formValues.top6,
      top7: formValues.top7,
      top8: formValues.top8,
      top9: formValues.top9,
      top10: formValues.top10,
      top11: formValues.top11,
      top12: formValues.top12,
      top13: formValues.top13,
      top14: formValues.top14,
      special: formValues.special,
    };
    postNewOrder(newOrder);
  };

  // Side Effects
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <>
      <Header />
      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            order={order}
            key={order.id}
          />
        </Route>
        <Route path='/confirmation'>
          <Confirmation order={order} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}
