import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuActivity, LuPlus } from "react-icons/lu";
import Button from "~/components/daisyUi/button";
import Modal from "~/components/daisyUi/modal";
import TextInput from "~/components/form/text-input";
import { cn } from "~/utils/cn";

export default function Applications() {
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const applications = [
    {
      id: "1",
      name: "Production App",
      status: "Active",
    },
    {
      id: "2",
      name: "Staging App",
      status: "Active",
    },
    {
      id: "3",
      name: "Development App",
      status: "Inactive",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-medium">Your Applications</h2>
      <p className="text-muted font-normal">
        Create and manage your web applications
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
        <div className="p-10 bg-white text-center border border-[#E2E8F0] rounded-2xl">
          <div
            onClick={() => setShowModal(true)}
            className="mx-auto bg-[#6366F11A] w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-main cursor-pointer group duration-300"
          >
            <LuPlus className="text-2xl text-main group-hover:text-white duration-300" />
          </div>
          <p className="font-medium mt-3">Create New App</p>
          <p className="text-muted font-normal mt-1">
            Start building your application
          </p>
        </div>

        {applications.map((app) => (
          <div
            key={app.id}
            className="p-6 bg-white border border-[#E2E8F0] rounded-2xl"
          >
            <div className="flex items-start justify-between">
              <div className="bg-[#6366F11A] w-12 h-12 rounded-2xl flex items-center justify-center ">
                <LuActivity className="text-2xl text-main " />
              </div>
              <div
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-xl border",
                  app.status === "Active" &&
                    "text-[#008236] bg-[#0082361A] border-[#B9F8CF]",
                  app.status === "Inactive" &&
                    "text-[#364153] bg-[#F3F4F6] border-[#E5E7EB]",
                )}
              >
                {app.status}
              </div>
            </div>
            <p className="font-medium mt-4">{app.name}</p>
            <p className="text-muted font-normal text-sm mt-1">ID: {app.id}</p>
            <Button variant="default" className="block w-full mt-4">
              Manage
            </Button>
          </div>
        ))}
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h3 className="text-lg font-medium mb-2">Create New Application</h3>
        <p className="text-muted font-normal text-sm">
          Enter a name for your new application. You can change this later in
          settings.
        </p>

        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="mt-6"
        >
          <TextInput
            id="application-name"
            name="applicationName"
            label="Application Name"
            control={control}
            placeholder="My Awesome App"
            rules={{ required: "Application name is required" }}
            error={errors.applicationName?.message as string}
          />
          <div className="mt-4 flex items-center justify-end gap-2">
            <Button
              type="button"
              variant="default"
              onClick={() => {
                setShowModal(false);
                reset();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Create App</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
