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

export default RegisterDialog;
