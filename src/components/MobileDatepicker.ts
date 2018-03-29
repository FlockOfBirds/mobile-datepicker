import { Component, ReactNode, createElement } from "react";
import "../ui/MobileDatepicker.scss";

import { ReactInfiniteCalendar } from "./ReactInfiniteCalendar";
import { DateInput } from "./DateInput";
import * as format from "date-fns/format";

export interface MobileDatepickerProps {
    className?: string;
    readOnly?: boolean;
    style?: object;
    date?: string;
    showHeader: boolean;
    actionClick: boolean;
    showMonthsForYears: boolean;
    showOverlay: boolean;
    hideYearsOnSelect: boolean;
    width: number;
    height: number;
    todayHelperRowOffset: number;
    rowHeight: number;
    autoFocus: boolean;
    tabIndex: number;
    attribute: string;
    selected?: Date;
    formatDate: string;
    onselectMicroflow: string;
    update: (date: string) => void;
}

export interface DatePickerState {
    showCalendar: boolean;
    printDate: string;
}

export class MobileDatepicker extends Component<MobileDatepickerProps, DatePickerState> {

    constructor(props: MobileDatepickerProps) {
        super(props);

        this.state = {
            printDate: `${format(props.attribute, this.props.formatDate)}`,
            showCalendar: this.props.autoFocus
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return createElement("div", { style: this.props.style },
            this.createDateInput(),
            createElement("br", {}),
            this.createCalender()
        );
    }

    private createDateInput(): ReactNode {
        return createElement(DateInput, {
            attribute: this.props.attribute,
            onChange: this.handleChange,
            onClick: this.handleClick,
            printDate: this.state.printDate
        });
    }
    private createCalender(): ReactNode {
        return createElement(ReactInfiniteCalendar, {
            actionClick: this.props.actionClick,
            autoFocus: this.props.autoFocus,
            className: "widget-date-picker-calendar",
            height: this.props.height,
            hideYearsOnSelect: this.props.hideYearsOnSelect,
            onSelect: (date: string) => {
                this.setState({
                    printDate: `${format(date, this.props.formatDate)}`,
                    showCalendar: !this.state.showCalendar
                });
                if (this.props.actionClick) {
                    // alert("You selected: " + format(date, "ddd, MMM Do YYYY"));
                    this.props.update(this.props.onselectMicroflow);
                }
            },
            printDate: this.state.printDate,
            rowHeight: this.props.rowHeight,
            showCalendar: this.state.showCalendar,
            showHeader: this.props.showHeader,
            showMonthsForYears: this.props.showMonthsForYears,
            showOverlay: this.props.showOverlay,
            tabIndex: this.props.tabIndex,
            todayHelperRowOffset: this.props.todayHelperRowOffset,
            width: this.props.width
        });
    }

    componentWillReceiveProps(newProps: MobileDatepickerProps) {
        this.setState({
            printDate: `${format(newProps.attribute, this.props.formatDate)}`
        });
    }

    private handleClick() {
        this.setState({
            showCalendar: !this.state.showCalendar
        });
    }

    private handleChange(attribute: string) {
        this.setState({
            printDate: attribute
        });
    }
}
