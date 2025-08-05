"use client";
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
      <DialogContent className="w-full max-w-sm sm:max-w-xl mx-auto p-4 sm:p-6 bg-black text-white border-2 border-pink-100 rounded-lg drop-shadow-[0_0_15px_#f72561]">
        <DialogHeader>
          <DialogTitle className="text-center text-lg sm:text-xl tracking-widest font-squid">
            {step === "choose"
              ? "Choose Registration Type"
              : "Offline Registration"}
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
              onClick={() => setStep("offline")}
            >
              Offline Registration
            </button>
            <button
              className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-medium text-sm px-4 py-2 rounded transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://unstop.com/o/16qOFci?lb=9RlTJ3q5",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Online Registration
            </button>
          </div>
        ) : step === "offline" ? (
          <div className="h-[65vh] md:h-[70vh]">
            <iframe
              src="https://konfhub.com/widget/smackathon-2k25?desc=false&secondaryBg=ffffff&ticketBg=ffffff&borderCl=ffffff&bg=FFFFFF&fontColor=002E6E&ticketCl=002E6E&btnColor=fb5850&fontFamily=Nunito&borderRadius=10"
              id="konfhub-widget"
              title="Register for Smackathon 2k25"
              className="rounded-2xl"
              width="100%"
              height="90%"
            ></iframe>
            <button
              type="button"
              className="text-xs bg-pink-600 py-2 px-4 rounded-lg text-white self-center mt-5"
              onClick={() => setStep("choose")}
            >
              ← Back
            </button>
          </div>
        ) : (
          <div>Something went wrong</div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;

//sorry karna pada, yeh upar walla just for time sake, you can edit it anytime
{
  /*
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

export default RegisterDialog;*/
}
