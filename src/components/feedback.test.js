import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import Feedback from "./feedback.js";

describe("<Feedback />", () => {
  it("Smoke Test", () => {
    shallow(<Feedback />);
  });

  it("Should give feedback", () => {
    const feedbackText = "New Feedback";
    const wrapper = shallow(<Feedback feedback={feedbackText} />);
    expect(wrapper.contains(feedbackText)).toEqual(true);
  });
});
