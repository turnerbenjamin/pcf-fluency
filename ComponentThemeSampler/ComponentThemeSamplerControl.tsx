import * as React from "react";
import {
    Divider,
    FluentProvider,
    Input,
    InputOnChangeData,
    InteractionTag,
    InteractionTagPrimary,
    Label,
    Theme,
} from "@fluentui/react-components";

export interface IComponentThemeSamplerControlProps {
    value?: string;
    onChange: (
        ev: React.ChangeEvent<HTMLInputElement>,
        data: InputOnChangeData
    ) => void;
    fluentDesignState?: {
        tokenTheme: Theme;
    };
}

export const ComponentThemeSamplerControl: React.FC<
    IComponentThemeSamplerControlProps
> = ({ value, onChange, fluentDesignState }) => {
    const inputStyle = {
        width: "100%",
        marginBottom: "5px",
    };

    return (
        <FluentProvider theme={fluentDesignState?.tokenTheme}>
            <Label>I am a label</Label>
            <Divider />
            <div>
                <Label>Outline</Label>
                <Input
                    value={value}
                    onChange={onChange}
                    appearance="outline"
                    style={inputStyle}
                />
                <Label>Underline</Label>
                <Input
                    value={value}
                    onChange={onChange}
                    appearance="underline"
                    style={inputStyle}
                />
                <Label>Filled Lighter</Label>
                <Input
                    value={value}
                    onChange={onChange}
                    appearance="filled-lighter"
                    style={inputStyle}
                />
                <Label>Filled Darker</Label>
                <Input
                    value={value}
                    onChange={onChange}
                    appearance="filled-darker"
                    style={inputStyle}
                />
                <Label>Filled Shadow</Label>
                <Input
                    value={value}
                    onChange={onChange}
                    appearance="filled-lighter-shadow"
                    style={inputStyle}
                />
                <Label>Filled Darker Shadow</Label>
                <Input
                    value={value}
                    onChange={onChange}
                    appearance="filled-darker-shadow"
                    style={inputStyle}
                />
            </div>
            <Divider />
            <div>
                <InteractionTag selected>
                    <InteractionTagPrimary>
                        Selected Filled
                    </InteractionTagPrimary>
                </InteractionTag>
                <InteractionTag selected appearance="outline">
                    <InteractionTagPrimary>
                        Selected Outline
                    </InteractionTagPrimary>
                </InteractionTag>
                <InteractionTag selected appearance="brand">
                    <InteractionTagPrimary>
                        Selected Brand
                    </InteractionTagPrimary>
                </InteractionTag>
            </div>
        </FluentProvider>
    );
};
