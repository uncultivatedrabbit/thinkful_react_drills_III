import React from "react";
import toJson from "enzyme-to-json";
import { shallow} from "enzyme";
import Accordion from "./Accordion";


const testSections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
  },
];

describe("Accordion", () => {
  it("renders empty given no Accordion sections without errs", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders no sections by default", () => {
    const wrapper = shallow(<Accordion sections={testSections}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens clicked sections',() => {
    const wrapper = shallow(<Accordion sections={testSections}/>)
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('only opens one section at a time', () => {
    const wrapper = shallow(<Accordion sections={testSections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
});
