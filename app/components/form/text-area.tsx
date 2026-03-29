import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import {
  Textarea as DNTextarea,
  TextareaProps as DNTextareaProps,
} from "../daisyUi/text-area";

type ProxyControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Required<Pick<ControllerProps<TFieldValues, TName>, "name">> &
  Pick<
    ControllerProps<TFieldValues, TName>,
    "rules" | "shouldUnregister" | "control" | "disabled"
  >;

type ProxyTextareaProps = Pick<
  DNTextareaProps,
  | "label"
  | "error"
  | "placeholder"
  | "id"
  | "autoComplete"
  | "required"
  | "rows"
>;

export type TextareaInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ProxyControllerProps<TFieldValues, TName> & ProxyTextareaProps;

export default function TextareaInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  rules,
  shouldUnregister,
  control,
  disabled,
  ...props
}: TextareaInputProps<TFieldValues, TName>) {
  return (
    <Controller
      {...{ name, rules, shouldUnregister, control, disabled }}
      render={({ field }) => {
        return (
          <DNTextarea
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
