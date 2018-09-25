import * as React from "react";
import {
  Button,
  withStyles,
  createStyles,
  WithStyles,
  Theme,
  Typography
} from "@material-ui/core";

export interface ISelectorProps extends WithStyles<typeof styles> {
  value: string;
  onDecrement?: () => void;
  onIncrement?: () => void;
}

export interface ISelectorState {}

const styles = (theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing.unit
    },
    value: {
      display: "inline-block",
      margin: theme.spacing.unit
    },
    noHoverButton: {
      extend: "button",
      "&:hover": {
        background: "none"
      }
    },
    input: {
      margin: theme.spacing.unit
    }
  });

class Selector extends React.Component<ISelectorProps, ISelectorState> {
  public render() {
    const { classes, value, onDecrement, onIncrement } = this.props;
    return (
      <React.Fragment>
        <Button
          data-testid="decrement-selector"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onDecrement}
        >
          -
        </Button>
        <Typography
          data-testid="value-selector"
          variant="title"
          className={classes.value}
        >
          {value}
        </Typography>
        <Button
          data-testid="increment-selector"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onIncrement}
        >
          +
        </Button>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Selector);
