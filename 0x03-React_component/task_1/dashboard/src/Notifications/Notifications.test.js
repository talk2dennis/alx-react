import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
    });
    
    it("Notifications renders three list items", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find("ul").children()).toHaveLength(3);
    });
    
    it("Notifications renders the text Here is the list of notifications", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(".Notifications p").text()).toEqual(
        "Here is the list of notifications"
        );
    });
});