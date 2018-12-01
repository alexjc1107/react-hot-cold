import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import GuessList from "./guess-list";

describe("<GuessList />", () => {
  it("Smoke Test", () => {
    shallow(<GuessList guesses={[]} />);
  });
});
