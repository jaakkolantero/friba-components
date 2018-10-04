import * as React from "react";
import Downshift from "downshift";
import { createStyles, Paper, Theme, withStyles } from "@material-ui/core";
import { IAutoCompleteProps, IAutoCompleteState } from ".";
import { renderInput } from "./autocomplete/Input";
import { getSuggestions, renderSuggestion } from "./autocomplete/Suggestion";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 250
    },
    container: {
      flexGrow: 1,
      position: "relative"
    },
    paper: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    inputRoot: {
      width: "100%"
    }
  });

class AutoComplete extends React.PureComponent<
  IAutoCompleteProps,
  IAutoCompleteState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: this.props.value || ""
    };
  }
  handleStateChange = (changes: any) => {
    const { onValueChange } = this.props;
    if (changes.hasOwnProperty("selectedItem")) {
      this.setState({ value: changes.selectedItem });
      onValueChange({ value: changes.selectedItem });
    } else if (changes.hasOwnProperty("inputValue")) {
      this.setState({ value: changes.inputValue });
      onValueChange({ value: changes.inputValue });
    }
  };

  public render() {
    const { classes, values, placeholder, error, title } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <Downshift selectedItem={value} onStateChange={this.handleStateChange}>
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            highlightedIndex,
            inputValue,
            isOpen,
            selectedItem,
            clearSelection
          }) => (
            <div className={classes.container}>
              {renderInput({
                error,
                fullWidth: true,
                classes,
                title,
                selectedItem,
                clearSelection,
                value,
                InputProps: getInputProps({
                  placeholder: placeholder
                })
              })}
              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue, values).map(
                      (suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({ item: suggestion.label }),
                          highlightedIndex,
                          selectedItem
                        })
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          )}
        </Downshift>
      </div>
    );
  }
}

export default withStyles(styles)(AutoComplete);
