import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Confirmation from './Confirmation';

export default function Form(props) {
  const { values, change, submit, disabled, errors, order } = props;

  const history = useHistory();

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  };

  const routeToOrder = () => {
    history.push('/confirmation');
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
    routeToOrder();
  };

  return (
    <div>
      <h1 id='order-page-heading'>Place Order</h1>
      <form className='form-container' id='pizza-form' onSubmit={onSubmit}>
        <div className='form-field'>
          <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.size}</div>
            <div>{errors.sauce}</div>
            <div>{errors.topping}</div>
            <div>{errors.special}</div>
          </div>
          <label>
            Name:
            <input
              type='text'
              name='name'
              values={values.name}
              onChange={onChange}
            />
          </label>

          <label>
            Email:
            <input
              type='email'
              name='email'
              values={values.email}
              onChange={onChange}
            />
          </label>

          <label>
            Size:
            <select
              id='size-dropdown'
              name='size'
              values={values.size}
              onChange={onChange}>
              <option value=''>--Select-Size--</option>
              <option value='XL'>Extra Large</option>
              <option value='L'>Large</option>
              <option value='M'>Medium</option>
              <option value='S'>Small</option>
            </select>
          </label>
          <label>
            Sauce:
            <ul>
              <li>
                <label>
                  <input
                    type='radio'
                    name='sauce'
                    value='Original Red'
                    values={values.sauce}
                    onChange={onChange}
                  />
                  Original Red
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    name='sauce'
                    value='Garlic Ranch'
                    values={values.sauce}
                    onChange={onChange}
                  />
                  Garlic Ranch
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    name='sauce'
                    value='BBQ Sauce'
                    values={values.sauce}
                    onChange={onChange}
                  />
                  BBQ Sauce
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    name='sauce'
                    value='Spinach Alfredo'
                    values={values.sauce}
                    onChange={onChange}
                  />
                  Spinach Alfredo
                </label>
              </li>
            </ul>
          </label>
          <label>
            Toppings:
            <ul>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top1'
                    values={values.top1}
                    onChange={onChange}
                  />
                  Pepperoni
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top2'
                    values={values.top2}
                    onChange={onChange}
                  />
                  Sausage
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top3'
                    values={values.top3}
                    onChange={onChange}
                  />
                  Canadian Bacon
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top4'
                    values={values.top4}
                    onChange={onChange}
                  />
                  Spicy Italian Sausage
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top5'
                    values={values.top5}
                    onChange={onChange}
                  />
                  Grilled Chicken
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top6'
                    values={values.top6}
                    onChange={onChange}
                  />
                  Onions
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top7'
                    values={values.top7}
                    onChange={onChange}
                  />
                  Green Pepper
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top8'
                    values={values.top8}
                    onChange={onChange}
                  />
                  Diced Tomatoes
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top9'
                    values={values.top9}
                    onChange={onChange}
                  />
                  Black Olives
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top10'
                    values={values.top10}
                    onChange={onChange}
                  />
                  Roasted Garlic
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top11'
                    values={values.top11}
                    onChange={onChange}
                  />
                  Artichoke Hearts
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top12'
                    values={values.top12}
                    onChange={onChange}
                  />
                  Three Cheese
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top13'
                    values={values.top13}
                    onChange={onChange}
                  />
                  Pineapple
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    name='top14'
                    values={values.top14}
                    onChange={onChange}
                  />
                  Extra Cheese
                </label>
              </li>
            </ul>
          </label>
          <label>
            Special Instructions:
            <input
              id='special-text'
              type='text'
              name='special'
              values={values.special}
              onChange={onChange}
            />
          </label>
          <button id='order-button' type='submit' disabled={disabled}>
            Submit Order
          </button>
        </div>
      </form>
      <Switch>
        <Route path='/confirmation'>
          <Confirmation order={order} />
        </Route>
      </Switch>
    </div>
  );
}
