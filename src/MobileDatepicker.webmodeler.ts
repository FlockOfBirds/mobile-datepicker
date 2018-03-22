import { Component, createElement } from "react";

declare function require(name: string): string;

// tslint:disable-next-line class-name
export class preview extends Component<ContainerProps, DatePickerState> {
    render() {
        return createElement(MobileDatepicker as any);
    }
}

export function getPreviewCss() {
    return (
        require("./ui/MobileDatepicker.scss") + require("react-infinite-calendar/styles.css")
    );
}

export function getVisibleProperties(value: any, visibility: any) {
    visibility.datePicker = value.datePicker === "custom";

    return visibility;
}
