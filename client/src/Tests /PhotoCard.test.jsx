/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

const PhotoCard = require('../components/PhotoCard.jsx');

describe('<PhotoCard />', () => {
  test('should render without throwing an error', () => {
    expect(mount(<PhotoCard />).contains(<div className="cards-slider" />)).toBe(true);
  });

  test('should be selectable by class "cards-slider"', () => {
    expect(mount(<PhotoCard />).is('.cards-slider')).toBe(true);
  });

  test('should mount in a full DOM', () => {
    expect(mount(<PhotoCard />).find('.cards-slider').length).toBe(1);
  });
});
