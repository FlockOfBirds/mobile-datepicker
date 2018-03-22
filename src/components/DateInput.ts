import { Component, createElement } from "react";
import * as FaCalendar from "react-icons/lib/fa/calendar";

export interface DateInputProps {
    attribute: string;
    onChange: (attribute: string) => void;
    onClick: () => void;
    printDate: string;
}

export class DateInput extends Component<DateInputProps , {}> {
    render() {
        return createElement("div", {},
            createElement("input", {
                attribute: this.props.attribute,
                className: "widget-date-picker-form",
                onChange: this.props.onChange,
                onClick: this.props.onClick,
                placeholder: this.props.printDate,
                type: "text"
            }),
            createElement("a", {},
                createElement(FaCalendar, {
                    className: "widget-date-picker-form-row",
                    onChange: this.props.onChange,
                    onClick: this.props.onClick
                })
            )
        );
    }
}
