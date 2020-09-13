import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {Calc} from './Calc';
Enzyme.configure({
    adapter:new EnzymeAdapter()
});
test("render Calc Component",()=>{
    const wrapper = shallow(<Calc/>);
    console.log(wrapper.debug());
    expect(wrapper).toBeTruthy();
});

test("render div",()=>{
    const wrapper = shallow(<Calc/>);
    const div = wrapper.find("[data-test='comp-calc-div']");
    expect(div.length).toBe(1);
});

test("render plus button",()=>{
    const wrapper = shallow(<Calc/>);
    const button = wrapper.find("[data-test='comp-calc-button']");
    expect(button.length).toBe(1);
});

test("Counter Start at 0 ",()=>{
    const wrapper = shallow(<Calc/>);
    let initState = wrapper.state('counter');
    expect(initState).toBe(0);
});

test("Plus button click",()=>{
    let counter = 0;
    const wrapper = shallow(<Calc/>);
    const button = wrapper.find("[data-test='comp-calc-button']");
    button.simulate('click');
   const p =  wrapper.find("[data-test='comp-calc-p']");
   expect(p.text()).toContain(counter+1);
});