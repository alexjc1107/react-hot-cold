import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import GuessCount from "./guess-count.js";

describe("<GuessCount />", () => {
  it("Smoke Test", () => {
    shallow(<GuessCount />);
  });
});
