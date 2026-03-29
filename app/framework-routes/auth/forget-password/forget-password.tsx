import { useForm } from "react-hook-form";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router";
import Button from "~/components/daisyUi/button";
import TextInput from "~/components/form/text-input";
import HLogo from "~/components/h-logo";

export default function ForgetPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center items-center min-h-screen py-20">
      <div>
        <div className="flex flex-col items-center">
          <HLogo />

          <p className="mt-6 mb-2 text-2xl font-medium text-dark">
            Forgot password?
          </p>
          <p className="text-muted font-normal">
            No worries, we'll send you reset instructions
          </p>
        </div>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="md:w-125 bg-white p-8 border border-[#E2E8F0] rounded-2xl mt-8"
        >
          <TextInput
            id="email"
            name="email"
            label="Email address"
            control={control}
            placeholder="name@company.com"
            rules={{ required: "Email is required" }}
            error={errors.email?.message as string}
          />

          <Button className="w-full mt-6" type="submit">
            Reset Password
          </Button>
        </form>

        <Link
          to="/auth/sign-in"
          className="flex items-center justify-center gap-2 text-sm font-medium text-muted mt-8 hover:underline"
        >
          <LuArrowLeft className="text-lg" /> Back to login
        </Link>
      </div>
    </div>
  );
}
