import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import StatusSection from "./status-section.js";

describe("<StatusSection />", () => {
  it("Smoke Test", () => {
    shallow(<StatusSection guesses={[]} />);
  });

  it("Should render GuessCount, GuessList, and AuralStatus", () => {
    mount(<StatusSection guesses={[]} />);
  });
});
