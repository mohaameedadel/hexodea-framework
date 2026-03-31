import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Button from "~/components/daisyUi/button";
import TextInput from "~/components/form/text-input";
import HLogo from "~/components/h-logo";

export default function SignIn() {
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
            Sign in to Hexodea
          </p>
          <p className="text-muted font-normal">
            Enter your credentials to access your account
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
          <div className="relative">
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
            <Link
              to="/app/auth/forgot-password"
              className="absolute top-1 right-0 text-sm text-main font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <Button className="w-full mt-6" type="submit">
            Sign In
          </Button>
        </form>

        <p className="text-center text-sm font-normal text-muted mt-8">
          Don't have an account?
          <Link
            to="/app/auth/sign-up"
            className="text-dark text-base font-medium hover:underline ms-1"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
