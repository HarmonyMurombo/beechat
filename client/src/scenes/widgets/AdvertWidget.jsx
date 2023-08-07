import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://beechat.onrender.com/assets/hpc.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Zimbabwe Centre For High Perfomance Computing</Typography>
        <Typography color={medium}>zchpc.ac.zw</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to a stunning practice of aggregating computing power in an approach that delivers much higher performance than one could attain out of a typical desktop computer or workstation in order to solve complex problems in science, engineering, weather forecasting, simulations, or any field of concern.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
