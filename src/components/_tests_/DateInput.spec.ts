import { shallow } from "enzyme";
import { createElement } from "react";
import * as FaCalendar from "react-icons/lib/fa/calendar";

import { DateInput, DateInputProps } from "../DateInput";

describe("DateInput", () => {
    const shallowRenderDatePicker = (props: DateInputProps) => shallow(createElement(DateInput, props));
    const defaultProps: DateInputProps = {
        attribute: "date",
        onChange: jasmine.createSpy("onChange"),
        onClick: jasmine.createSpy("onClick"),
        onEnter: jasmine.createSpy("onMouseEnter"),
        onLeave: jasmine.createSpy("onMouseLeave"),
        printDate: "12/05/1994"
    };

    it("should render the structure correctly", () => {
        const dateInput = shallowRenderDatePicker(defaultProps);

        expect(dateInput).toBeElement(
            createElement("div", {},
                createElement("input", {
                    attribute: defaultProps.attribute,
                    className: "widget-date-picker-form",
                    onChange: defaultProps.onChange,
                    onClick: defaultProps.onClick,
                    placeholder: defaultProps.printDate,
                    type: "text"
                }),
                createElement("a", {},
                    createElement(FaCalendar, {
                        className: "widget-date-picker-form-row",
                        onChange: defaultProps.onChange,
                        onClick: defaultProps.onClick
                    })
                )
            )
        );
    });

    it("should respond to onclick events", () => {
        const dateInput = shallowRenderDatePicker(defaultProps);

        dateInput.find("input").simulate("click");

        expect(defaultProps.onClick).toHaveBeenCalled();
    });
});
