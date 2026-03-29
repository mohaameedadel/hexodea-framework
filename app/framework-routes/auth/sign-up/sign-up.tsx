import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Button from "~/components/daisyUi/button";
import TextInput from "~/components/form/text-input";
import HLogo from "~/components/h-logo";

export default function SignUp() {
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
            Create your account
          </p>
          <p className="text-muted font-normal">
            Start managing your applications with Hexodea
          </p>
        </div>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="md:w-125 bg-white p-8 border border-[#E2E8F0] rounded-2xl mt-8"
        >
          <TextInput
            id="name"
            name="name"
            label="Full name"
            control={control}
            placeholder="Enter your full name"
            rules={{ required: "Name is required" }}
            error={errors.name?.message as string}
          />
          <TextInput
            id="email"
            name="email"
            label="Email address"
            control={control}
            placeholder="name@company.com"
            rules={{ required: "Email is required" }}
            error={errors.email?.message as string}
          />
          <TextInput
            id="password"
            name="password"
            label="Password"
            control={control}
            type="password"
            placeholder="Enter your password"
            rules={{ required: "Password is required" }}
            error={errors.password?.message as string}
          />
          <TextInput
            id="confirm-password"
            name="confirm-password"
            label="Confirm password"
            control={control}
            type="password"
            placeholder="Confirm your password"
            rules={{ required: "Confirm password is required" }}
            error={errors["confirm-password"]?.message as string}
          />

          <Button className="w-full mt-6" type="submit">
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm font-normal text-muted mt-8">
          Already have an account?
          <Link
            to="/auth/sign-in"
            className="text-dark text-base font-medium hover:underline ms-1"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
