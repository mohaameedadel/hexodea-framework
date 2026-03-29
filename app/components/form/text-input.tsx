import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import {
  Input as DNTextInput,
  InputProps as DNTextInputProps,
} from "../daisyUi/input";

type ProxyControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Required<Pick<ControllerProps<TFieldValues, TName>, "name">> &
  Pick<
    ControllerProps<TFieldValues, TName>,
    "rules" | "shouldUnregister" | "control" | "disabled"
  >;

type ProxyTextInputProps = Pick<
  DNTextInputProps,
  | "label"
  | "type"
  | "error"
  | "placeholder"
  | "id"
  | "autoComplete"
  | "required"
  | "mask"
>;

export type TextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ProxyControllerProps<TFieldValues, TName> & ProxyTextInputProps;

export default function TextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  rules,
  shouldUnregister,
  control,
  disabled,
  ...props
}: TextInputProps<TFieldValues, TName>) {
  return (
    <Controller
      {...{ name, rules, shouldUnregister, control, disabled }}
      render={({ field }) => {
        return (
          <DNTextInput
            {...props}
            {...field}
            value={field.value ?? ""}
            onChange={(e) => {
              const val = e.target.value;
              field.onChange(val);
            }}
          />
        );
      }}
    />
  );
}
