'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import RegisterButton from "../../ui/register-button";




const RegisterDialog = () => {
  const [step, setStep] = useState("choose");
  return (
    <Dialog>
      <DialogTrigger>
        <RegisterButton />
      </DialogTrigger>
<DialogContent className="w-full max-w-sm sm:max-w-md mx-auto p-4 sm:p-6 bg-black text-white border-4 border-pink-100 rounded-lg drop-shadow-[0_0_15px_#f72561]">
  <DialogHeader>
    <DialogTitle className="text-center text-lg sm:text-xl tracking-widest font-squid">
      {step === "choose" ? "Choose Registration Type" : "Offline Registration"}
    </DialogTitle>
    <DialogDescription className="text-center mt-1 text-sm text-pink-200">
      {step === "choose"
        ? "Please select how you'd like to register"
        : "Fill in your details below"}
    </DialogDescription>
  </DialogHeader>

  {step === "choose" ? (
    <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5">
      <button
        className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-medium text-sm px-4 py-2 rounded transition-all duration-300"
        onClick={() =>
          window.open("https://konfhub.com/", "_blank", "noopener,noreferrer")
        }
      >
        Offline Registration
      </button>
      <button
        className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-medium text-sm px-4 py-2 rounded transition-all duration-300"
        onClick={() => setStep("offline")}
      >
        Online Registration
      </button>
    </div>
  ) : (
    <form className="flex flex-col gap-3 mt-5">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full px-3 py-2 rounded bg-black border border-pink-300 text-white placeholder-pink-300 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-3 py-2 rounded bg-black border border-pink-300 text-white placeholder-pink-300 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <input
        type="text"
        placeholder="College Name"
        className="w-full px-3 py-2 rounded bg-black border border-pink-300 text-white placeholder-pink-300 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        onClick={() =>
          window.open("https://unstop.com/", "_blank", "noopener,noreferrer")
        }
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold text-sm py-2 px-4 rounded transition-all duration-300"
      >
        Submit
      </button>
      <button
        type="button"
        className="text-xs text-pink-300 underline mt-1 self-center"
        onClick={() => setStep("choose")}
      >
        ← Back
      </button>
    </form>
  )}
</DialogContent>

       </Dialog>
  );
};

export default RegisterDialog;






//sorry karna pada, yeh upar walla just for time sake, you can edit it anytime
{/*
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterButton from "../../ui/register-button";

const RegisterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <RegisterButton />
      </DialogTrigger>
      <DialogContent className="border-4 border-pink-100 bg-black drop-shadow-[0_0_20px_#f72561] text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl tracking-widest font-squid">
            Registration Form
          </DialogTitle>
          <DialogDescription>Fill The form</DialogDescription>
        </DialogHeader>
        <div className="h-[50vh] md:h-[60vh]"></div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;*/}
