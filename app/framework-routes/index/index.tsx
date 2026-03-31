import { Link } from "react-router";
import Button from "~/components/daisyUi/button";
import HLogo from "~/components/h-logo";

export default function Index() {
  return (
    <div className="flex justify-center items-center min-h-screen py-20">
      <div>
        <div className="flex flex-col items-center">
          <HLogo />

          <p className="mt-6 mb-2 text-2xl font-medium text-dark">
            Welcome to Hexodea
          </p>
          <p className="text-muted font-normal">
            Start managing your applications with Hexodea
          </p>
        </div>
        <div className="md:w-125 bg-white p-8 border border-[#E2E8F0] rounded-2xl mt-8">
          <Link
            to="/app/auth/sign-in"
            className="w-full btn bg-main text-white px-10 py-2 h-full rounded-[10px] text-sm font-medium block text-center"
            type="submit"
          >
            Sign In
          </Link>
        </div>

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
