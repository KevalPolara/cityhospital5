import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReset } from "../../redux/slice/alert.slice";

function Alert(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (alert.text !== "") {
        enqueueSnackbar(alert.text, {
          variant: alert.color,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right"
          }
        });

        let useEffetRef = setTimeout(() => {
          dispatch(setReset());
        }, 2000);

        return () => {
          clearTimeout(useEffetRef);
        };
      }
    },
    [alert.text]
  );

  return <div />;
}

export default Alert;
