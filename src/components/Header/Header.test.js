import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";
import Navigation from "../Navigation/Navigation";

configure({
  adapter: new Adapter()
});

describe("Header", () => {
  let wrapper = null;
  let buttons = null;
  let buttonsArray = null;
  let personsButton = null;
  let carsButton = null;
  beforeEach(() => {
    wrapper = shallow(<Header location={{ pathname: "/" }} />);
    buttons = wrapper.find("button");
    buttonsArray = buttons.map(el => el);
    personsButton = buttonsArray[0];
    carsButton = buttonsArray[1];
  });
  it("Navigation in Header should be displayed", () => {
    expect(wrapper.contains(<Navigation />)).toEqual(true);
  });
  it("Buttons in Header should be displayed", () => {
    expect(buttons).toHaveLength(2);
  });
  it("Confirm buttons", () => {
    expect(personsButton.text()).toBe("Show/Hide Persons");
    expect(carsButton.text()).toBe("Show/Hide Cars");
  });
  it("First button should be enabled, second should be dissabled", () => {
    expect(personsButton.prop("disabled")).toBe(false);
    expect(carsButton.prop("disabled")).toBe(true);
  });
  it("First button should be dissabled, second should be enabled", () => {
    wrapper.setProps({
      location: {
        pathname: "/cars"
      }
    });
    buttons = wrapper.find("button");
    buttonsArray = buttons.map(el => el);
    personsButton = buttonsArray[0];
    carsButton = buttonsArray[1];
    expect(personsButton.prop("disabled")).toBe(true);
    expect(carsButton.prop("disabled")).toBe(false);
  });
  it("Confirm that Person Button Should Have Green Color", () => {
    wrapper.setProps({
      personsLength: 3
    });
    buttons = wrapper.find("button");
    buttonsArray = buttons.map(el => el);
    personsButton = buttonsArray[0];
    carsButton = buttonsArray[1];
    expect(personsButton.text()).toBe("Show/Hide Persons");
    expect(personsButton.prop("className")).toContain("green");
  });
  it("Confirm that Person Button Should Have Yellow Color", () => {
    wrapper.setProps({
      personsLength: 2
    });
    buttons = wrapper.find("button");
    buttonsArray = buttons.map(el => el);
    personsButton = buttonsArray[0];
    carsButton = buttonsArray[1];
    expect(personsButton.text()).toBe("Show/Hide Persons");
    expect(personsButton.prop("className")).toContain("yellow");
  });
  it("Confirm that Person Button Should Have Red Color", () => {
    wrapper.setProps({
      personsLength: 1
    });
    buttons = wrapper.find("button");
    buttonsArray = buttons.map(el => el);
    personsButton = buttonsArray[0];
    carsButton = buttonsArray[1];
    expect(personsButton.text()).toBe("Show/Hide Persons");
    expect(personsButton.prop("className")).toContain("red");
  });
});
