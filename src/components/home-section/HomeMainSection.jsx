import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { styled } from "@mui/material/styles";
import HomeImage from "../../assets/HomescreenImage.png";
import HeadingText from "./HeadingText";
import CustomButton from "../buttons/CustomButton";
import "../../css/HomeSection.css";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 400,
  marginTop: theme.spacing(8),
  //   borderRadius: (theme.vars || theme).shape.borderRadius,
  //   outline: "6px solid",
  //   outlineColor: "hsla(220, 25%, 80%, 0.2)",
  //   border: "1px solid",
  //   borderColor: (theme.vars || theme).palette.grey[200],
  //   boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(${HomeImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  [theme.breakpoints.up("sm")]: {
    // marginTop: theme.spacing(10),
    height: 550,
  },
}));


export default function HomeMainSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundRepeat: "no-repeat",

        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}
    >
      <Container
        className="HomeSectionDiv"
        style={{ paddingTop: "20px" }}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              color: "rgb(60 60 63)",
            }}
          >
            Celebrate&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "#624bb9",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              })}
            >
              Together
            </Typography>
          </Typography>

          <HeadingText />

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Explore our smart event dashboard — built to simplify your planning,
            streamline coordination, and enhance every event experience. From
            invitations to schedules, manage it all in one place.
          </Typography>
          <Stack
            style={{ display: "flex", justifyContent: "center" }}
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
          >
            <CustomButton btnText="Join Now" handleClick={handleClick} />
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            By clicking &quot;Join now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
          </Typography>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
}
