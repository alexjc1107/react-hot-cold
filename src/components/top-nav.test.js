import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import TopNav from "./top-nav.js";

describe("<TopNav />", () => {
  it("Smoke Test", () => {
    shallow(<TopNav />);
  });

  it("Should call onRestartGame when New Game link clicked", () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    wrapper.find(".new").simulate("click");
    expect(callback).toHaveBeenCalled();
  });

  it("Should call onGenerateAuralUpdate when Hear state of game link clicked", () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    wrapper.find(".visuallyhidden").simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});
