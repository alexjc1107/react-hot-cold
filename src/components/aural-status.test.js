import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import AuralStatus from "./aural-status";

describe("<AuralStatus />", () => {
  it("Smoke Test", () => {
    shallow(<AuralStatus />);
  });

  it("Should update aural status", () => {
    const newStatus = "New Status";
    const wrapper = shallow(<AuralStatus auralStatus={newStatus} />);
    expect(wrapper.contains(newStatus)).toEqual(true);
  });
});
