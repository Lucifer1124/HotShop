import { Alert, Button, Snackbar, Step, StepLabel, Stepper } from "@mui/material";
import React, { useEffect, useState } from "react";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import { useFormik } from "formik";
import * as Yup from "yup";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../Redux Toolkit/Store";
import SellerLoginForm from "./SellerLoginForm";
import { useLocation } from "react-router-dom";
import SellerAccountForm from "./SellerAccountForm";




const BecomeSeller = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const { sellerAuth } = useAppSelector(store => store)

  const handleCloseSnackbar = () => setSnackbarOpen(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {

    if (sellerAuth.sellerCreated || sellerAuth.error || sellerAuth.otpSent) {
      setSnackbarOpen(true);
      console.log("store ", sellerAuth.error)
    }

  }, [sellerAuth.sellerCreated, sellerAuth.error, sellerAuth.otpSent])

  return (
    
    <div className="grid md:gap-10 grid-cols-3 min-h-screen  "  >
     
    <div></div>
      <section className="lg:col-span-1 md:col-span-2 col-span-3  p-10 shadow-lg rounded-b-md">

        {!isLoginPage ?
          <SellerAccountForm /> :
          <SellerLoginForm />
        }

        <div className='mt-10 space-y-2'>
          <h1 className='text-center text-sm font-medium'>{isLoginPage && "Don't"} have account ? </h1>
          <Button onClick={() => setIsLoginPage(!isLoginPage)} fullWidth sx={{ py: "11px" }} variant='outlined'>{isLoginPage ? "Register" : "Login"}</Button>
        </div>

      </section>
    


      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen} autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={sellerAuth.error ? "error" : "success"}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {sellerAuth.error ? sellerAuth.error : sellerAuth.sellerCreated ? sellerAuth.sellerCreated : " otp sent to your email!"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BecomeSeller;
