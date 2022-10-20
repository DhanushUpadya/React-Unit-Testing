import { render, screen,fireEvent, getByText} from '@testing-library/react';
import App,{validateInput} from './App';
import React from 'react'


describe('login describe statement', () => {
  test('validate function should pass on correct input ', () => {
    const text = "text@test.com";
    expect(validateInput(text)).toBe(true);
  });

  test('validate function should fail on incorrect input', () => {
    const text ="text"
    expect(validateInput(text)).not.toBe(true);
  });

  test('login form should be in the document ', () => {
    const component = render(<App/>);
    const labelInputNode = component.getByText("Email:");
    expect(labelInputNode).toBeInTheDocument();
  });

  test('Email field should have label', () => {
    const component = render(<App/>);
    const emailInputNode = component.getByLabelText("Email:");
   // console.log("EmailInputNode",emailInputNode);
    expect(emailInputNode.getAttribute("name")).toBe("email");
  
    
  });

  test('email input should accept text', () => {
     const {getByLabelText,getByText} = render(<App/>);
     const emailInputNode =  getByLabelText("Email:");
     expect(emailInputNode.value).toMatch("");
     fireEvent.change(emailInputNode,{target:{value:'testing'}})
    expect(emailInputNode.value).toMatch("testing");
   
   
 
  });

  
  
});
