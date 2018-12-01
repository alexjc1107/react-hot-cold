import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import Game from "./game.js";

describe("<Game />", () => {
  it("Smoke Test", () => {
    shallow(<Game />);
  });

  it("Restarts the game when restartGame called", () => {
    const wrapper = mount(<Game />);
    wrapper.setState({
      guesses: [1, 2, 3],
      feedback: "You got it!",
      correctAnswer: -1
    });
    wrapper.instance().restartGame();
    expect(wrapper.state("guesses")).toEqual([]);
    expect(wrapper.state("feedback")).toEqual("Make your guess!");
    expect(wrapper.state("correctAnswer")).toBeGreaterThanOrEqual(0);
    expect(wrapper.state("correctAnswer")).toBeLessThanOrEqual(100);
  });

  it("Makes guess and returns proper feedback", () => {
    const wrapper = mount(<Game />);
    wrapper.setState({ correctAnswer: 25 });

    wrapper.instance().makeGuess(76);
    expect(wrapper.state("feedback")).toEqual("You're Ice Cold...");
    expect(wrapper.state("guesses")).toEqual([76]);

    wrapper.instance().makeGuess(56);
    expect(wrapper.state("feedback")).toEqual("You're Cold...");
    expect(wrapper.state("guesses")).toEqual([76, 56]);

    wrapper.instance().makeGuess(36);
    expect(wrapper.state("feedback")).toEqual("You're Warm.");
    expect(wrapper.state("guesses")).toEqual([76, 56, 36]);

    wrapper.instance().makeGuess(26);
    expect(wrapper.state("feedback")).toEqual("You're Hot!");
    expect(wrapper.state("guesses")).toEqual([76, 56, 36, 26]);

    wrapper.instance().makeGuess(25);
    expect(wrapper.state("feedback")).toEqual("You got it!");
    expect(wrapper.state("guesses")).toEqual([76, 56, 36, 26, 25]);
  });
});
