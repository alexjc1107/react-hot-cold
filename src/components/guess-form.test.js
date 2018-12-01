import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("Smoke Test", () => {
    shallow(<GuessForm />);
  });

  it("Should call onMakeGuess when form submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 1;
    wrapper.find(".text").instance().value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value.toString());
  });
});
