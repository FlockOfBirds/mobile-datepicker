import { Component, createElement } from "react";
import { MobileDatepicker } from "../components/MobileDatepicker"

interface WrapperProps {
    class: string;
    readOnly: boolean;
    style: string;
}

export interface ContainerProps extends WrapperProps {
    onChangeMicroflow: string;
}

interface ContainerState {
    dateValue: string;
}

export default class DatePickerContainer extends Component<ContainerProps, ContainerState> {
    private attribute: string;

    constructor(props: ContainerProps) {
        super(props);

        this.state = {
            dateValue: ""
        };
    }

    render() {
        return createElement(MobileDatepicker as any, {
        });
    }
}
