import React from "react";
import { Route } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";
import Navigation from "../Navigation/Navigation";

configure({
  adapter: new Adapter()
});

describe("Header", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<Header location={{ pathname: "/" }} />);
  });
  it("Navigation in Header should be displayed", () => {
    const navElement = wrapper.find(Navigation);
    expect(navElement).toHaveLength(1);
  });
  it("Buttons in Header should be displayed", () => {
    const buttonElements = wrapper.find("button");
    expect(buttonElements).toHaveLength(2);
  });
  it("Confirm buttons", () => {
    const buttons = wrapper.find("button");
    const buttonsArray = buttons.map(el => el);
    expect(buttonsArray[0].text()).toBe("Show/Hide Persons");
    expect(buttonsArray[1].text()).toBe("Show/Hide Cars");
  });
  it("First button should be enabled, second should be dissabled", () => {
    const buttons = wrapper.find("button");
    const buttonsArray = buttons.map(el => el);
    expect(buttonsArray[0].prop("disabled")).toBe(false);
    expect(buttonsArray[1].prop("disabled")).toBe(true);
  });
  it("First button should be dissabled, second should be enabled", () => {
    wrapper.setProps({
      location: {
        pathname: "/cars"
      }
    });
    const buttons = wrapper.find("button");
    const buttonsArray = buttons.map(el => el);
    expect(buttonsArray[0].prop("disabled")).toBe(true);
    expect(buttonsArray[1].prop("disabled")).toBe(false);
  });
});
