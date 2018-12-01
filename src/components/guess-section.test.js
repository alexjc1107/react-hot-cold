import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import GuessSection from "./guess-section";

describe("<GuessSection />", () => {
  it("Smoke Test", () => {
    shallow(<GuessSection />);
  });
});
