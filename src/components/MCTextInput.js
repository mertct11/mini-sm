 
import React from "react";
import { render } from "react-dom";
import "./mct-text-input-style.css"; 
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
class MCTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: (props.locked && props.active) || false,
            value: props.value || "",
            error: props.error || "",
            label: props.label || "Label",
            type: props.type || "text",
            maxLength: props.maxLength || null,
            showPassAct: props.showPassAct || false,
            showPass: false,
        };
    }

    componentDidMount() {

        if (this.state.type == "phone") { 
            this.setState({ maxLength: 13, value: "90" })
        }

        if (this.state.type == "password") {
            this.setState({ showPassAct: true })
        }


    }


    changeValue(event) {
        const value = event.target.value;

        this.props.onChangeText(value)

        this.setState({ value: value });

        if (this.state.type === "email") {
            this.checkEmailValidation();

        }
        if (this.state.type == "phone") {
            if (this.state.value.length < this.state.maxLength) {

                this.setState({ error: "Length is not enough" })
            }
            else {
                this.setState({ error: null })
            }
        }


        if (this.props.callbackableConsoleFunc) {

            this.props.callbackableConsoleFunc(this.state.value.length)
        }
    }


    checkEmailValidation() {

        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.value)) {

            this.setState({ error: null })
        }
        else {
            this.setState({ error: "Check your email address" })
        }
    }

    handleShowPass() {
        this.setState({ showPass: !this.state.showPass })
    }
    render() {
        const { active, value, error, label } = this.state;
        const { locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
            "active"} ${locked && !active && "locked"}`;
        return (
            <div style={{ display: "flex", flexDirection: "row" }} className={fieldClassName}>
                <input
                    maxLength={this.state.maxLength}
                    id={1}
                    type={(this.state.type == "phone" ? "number" : (this.state.type == "password" && !this.state.showPass ? "password" : "text"))}
                    value={value}
                    placeholder={label}
                    onChange={this.changeValue.bind(this)}
                    // onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                    security={this.state.showPass.toString()}
                    onEnded={() => (this.state.maxLength !== 0 ? this.setState({ error: "Input must be" + this.state.maxLength + " character  " }) : null)}
                />
                <label htmlFor={1} className={error && "error"}>
                    {error || label}
                </label>
                {this.state.showPassAct &&
                    <div onClick={() => { this.handleShowPass() }}
                        style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 50, minWidth: 50 }}>
                        {this.state.showPass ?
                            <VisibilityOffIcon />
                            :
                            <VisibilityIcon />
                        }
                    </div>}
            </div>


        );
    }
}

export default MCTextInput;