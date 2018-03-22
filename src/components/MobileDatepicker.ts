import { Component, createElement } from "react";
import "../ui/MobileDatepicker.scss";

export interface MobileDatepickerProps {
    className?: string;
    readOnly?: boolean;
    style?: object;
}

export interface DatePickerState {
    printDate: string;
}

export class MobileDatepicker extends Component<MobileDatepickerProps, DatePickerState> {

    constructor(props: MobileDatepickerProps) {
        super(props);

        this.state = {
            printDate: ""
        };

    }

    render() {
        return createElement("div", {});
    }
}
