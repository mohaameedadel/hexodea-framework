import { LuArrowLeft, LuCircleCheck } from "react-icons/lu";
import { Link } from "react-router";

export default function CheckEmail() {
  return (
    <div className="flex justify-center items-center min-h-screen py-20">
      <div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[#DCFCE7] rounded-full flex items-center justify-center">
            <LuCircleCheck className="text-3xl text-[#00A63E]" />
          </div>

          <p className="mt-6 mb-2 text-2xl font-medium text-dark">
            Check your email
          </p>
          <p className="text-muted font-normal">
            We've sent a password reset link
          </p>
        </div>
        <div className="md:w-125 bg-white p-8 border border-[#E2E8F0] rounded-2xl mt-8">
          <p className="text-muted font-normal text-sm">
            Didn't receive the email? Check your spam folder or try again.
          </p>
          <Link
            to="/app/auth/forgot-password"
            className="w-full mt-6 btn bg-[#FAFAFA] text-dark px-10 py-2 h-full rounded-[10px] border border-[#FAFAFA] text-sm font-medium block text-center"
          >
            Try another email
          </Link>
        </div>

        <Link
          to="/app/auth/sign-in"
          className="flex items-center justify-center gap-2 text-sm font-medium text-muted mt-8 hover:underline"
        >
          <LuArrowLeft className="text-lg" /> Back to login
        </Link>
      </div>
    </div>
  );
}
