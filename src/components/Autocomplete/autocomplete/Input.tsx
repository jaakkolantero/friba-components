import * as React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  InputAdornment,
  IconButton,
  Tooltip
} from "@material-ui/core";

import Clear from "@material-ui/icons/Clear";

export function renderInput(inputProps: any) {
  const {
    InputProps,
    classes,
    error,
    ref,
    title,
    value,
    selectedItem,
    clearSelection,
    ...other
  } = inputProps;

  return (
    <React.Fragment>
      <FormControl
        className={classes.formControl}
        error={Boolean(error)}
        aria-describedby="component-autocomplete"
        {...other}
      >
        {title && <InputLabel htmlFor="input-autocomplete">{title}</InputLabel>}
        <Input
          inputProps={{ "data-testid": "input-autocomplete" }}
          id="input-autocomplete"
          inputRef={ref}
          className={classes.inputRoot}
          {...InputProps}
          {...other}
          endAdornment={
            selectedItem ? (
              <InputAdornment position="end">
                <Tooltip title="Clear selection">
                  <IconButton
                    aria-label="Clear selection"
                    onClick={clearSelection}
                    data-testid="clear-autocomplete"
                  >
                    {value.length > 0 && <Clear />}
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ) : null
          }
        />
        <FormHelperText error id="component-autocomplete-error-text">
          {error}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
}
