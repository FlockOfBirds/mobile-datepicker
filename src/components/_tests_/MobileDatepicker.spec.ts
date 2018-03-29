import { mount , shallow } from "enzyme";
import { createElement } from "react";

import { DatePickerState, MobileDatepicker, MobileDatepickerProps } from "../MobileDatepicker";
import { DateInput } from "../DateInput";
import { ReactInfiniteCalendar } from "../ReactInfiniteCalendar";

describe("MobileDatepicker", () => {
    const shallowRenderDatePicker = (props: MobileDatepickerProps) => shallow(createElement(MobileDatepicker, props));
    const fullRenderDatePicker = (props: MobileDatepickerProps) => mount(createElement(MobileDatepicker, props));
    const defaultProps: MobileDatepickerProps = {
        actionClick: false,
        attribute: "calender",
        autoFocus: true,
        formatDate: "DD/MM/YYYY",
        height: 300,
        hideYearsOnSelect: true,
        onselectMicroflow: "string",
        rowHeight: 56,
        selected: new Date(),
        showHeader: true,
        showMonthsForYears: false,
        showOverlay: true,
        tabIndex: 1,
        todayHelperRowOffset: 4,
        update: jasmine.any(Function),
        width: 320
    };

    const defaultState: DatePickerState = {
        printDate: "Invalid Date",
        showCalendar: true
    };

    it("should render the structure correctly", () => {
        const renderDatePicker = shallowRenderDatePicker(defaultProps);

        expect(renderDatePicker).toBeElement(
            createElement("div", {},
                createElement(DateInput, {
                    attribute: defaultProps.attribute,
                    onChange: jasmine.any(Function),
                    onClick: jasmine.any(Function),
                    printDate: defaultState.printDate
                }),
                createElement("br", {}),
                createElement(ReactInfiniteCalendar, {
                    actionClick: defaultProps.actionClick,
                    autoFocus: defaultProps.autoFocus,
                    className: "widget-date-picker-calendar",
                    height: defaultProps.height,
                    hideYearsOnSelect: defaultProps.hideYearsOnSelect,
                    onSelect: jasmine.any(Function),
                    printDate: defaultState.printDate,
                    rowHeight: defaultProps.rowHeight,
                    showCalendar: true,
                    showHeader: defaultProps.showHeader,
                    showMonthsForYears: defaultProps.showMonthsForYears,
                    showOverlay: defaultProps.showOverlay,
                    tabIndex: defaultProps.tabIndex,
                    todayHelperRowOffset: defaultProps.todayHelperRowOffset,
                    width: defaultProps.width
                })
            )
        );
    });

    it("should respond to onclick events", () => {
        const renderDatePicker = fullRenderDatePicker(defaultProps);
        const DatePickerInstance = renderDatePicker.instance() as any;
        const onClick = spyOn(DatePickerInstance, "handleClick").and.callThrough();
        const input = renderDatePicker.find("input").simulate("click");

        input.simulate("click");

        expect(onClick).toHaveBeenCalled();
    });

    it("should select a date from the calendar", () => {
        const renderDatePicker = fullRenderDatePicker(defaultProps);
        renderDatePicker.find("input").simulate("click");

        renderDatePicker.find(".Cal__Day__enabled").first().simulate("click");

        const newDate = renderDatePicker.find("input").prop("placeholder");

        expect(newDate).toContain("01/01/1980");
    });
});
