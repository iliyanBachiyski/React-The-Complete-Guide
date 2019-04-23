import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Footer from "../Footer/Footer";

configure({
  adapter: new Adapter()
});

describe("Footer Should be Displayed", () => {
  it("Should have Footer", () => {
    const wrapper = shallow(<Footer />);
    const element = wrapper.find("div");
    expect(wrapper).toHaveLength(1);
    expect(element).toHaveLength(1);
  });
});
