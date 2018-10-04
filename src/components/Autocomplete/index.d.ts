import { WithStyles } from "@material-ui/core";
import { styles } from "./Autocomplete";

/*~ https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
 */
export as namespace Autocomplete;

export interface IAutocompleteValueProp {
  label: string;
}

export interface IAutoCompleteProps extends WithStyles<typeof styles> {
  values: IAutocompleteValueProp[];
  value: string;
  placeholder?: string;
  title?: string;
  onValueChange: (object: { value: string }) => void;
  error?: string | boolean;
}

export interface IrenderSuggestionProps {
  highlightedIndex: number | null;
  index: number;
  itemProps: object;
  selectedItem: string;
  suggestion: IAutocompleteValueProp;
}

export interface IAutoCompleteState {
  value: string;
}
