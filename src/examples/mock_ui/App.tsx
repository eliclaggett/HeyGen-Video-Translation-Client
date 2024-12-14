/*
 * Filename: App.tsx
 * Author: Elijah Claggett
 *
 * Description:
 * This ReactJS file implements a demo application for testing the Heygen Video Translation Client
 */

// Imports
// React
import React, { useEffect, useState, useRef } from "react";

// Heygen Video Translation Client
import { TranslationClient } from "../../client";

// Styles
import {
  Alert,
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { TypeAnimation } from "react-type-animation";
import "./App.css";

// Global variables
const translations = [
  [
    "ビジネス用ビデオの翻訳",
    2000,
    "業務用ビデオの翻訳",
    2000,
    "お客様のためのビデオの翻訳",
    2000,
  ],
  [
    "We translate videos for business",
    2000,
    "We translate videos for professionals",
    2000,
    "We translate videos for you",
    2000,
  ],
];

export default function App(props: { disableCustomTheme?: boolean }) {
  // Instantiate the Heygen Video Translation Client
  const client = new TranslationClient();
  // Track the status of our translation requests
  const statusStr = client.getStatus();

  // Update the UI based on translation request status
  const [translationLoading, setTranslationLoading] = useState(false);
  const [japaneseTranslations, setJapaneseTranslations] = useState("");
  const [englishTranslations, setEnglishTranslations] = useState("hidden");
  const [successAlert, setSuccessAlert] = useState("hidden");
  const [errorAlert, setErrorAlert] = useState("hidden");

  // Custom UI
  const theme = createTheme({
    typography: {
      fontFamily: `"Lexend", "Helvetica", "Arial", sans-serif`,
      fontWeightRegular: "300",
      h1: {
        fontWeight: "200",
        fontSize: "2.5em",
      },
      body1: {
        fontSize: "1.1em",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "2rem",
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
            fontWeight: "300",
            fontSize: "1.1em",
          },
        },
      },
    },
  });

  // Event handler for the translation request button
  function handleClick() {
    client.requestTranslation("http://localhost:8000/status", "myVideoId");
  }

  // Track changes to the translation request status
  useEffect(() => {
    const status = JSON.parse(statusStr);
    setErrorAlert("hidden");
    setSuccessAlert("hidden");

    switch (status.result) {
      case "pending":
        // Translation request in progress, show loading indicator
        setTranslationLoading(true);
        setErrorAlert("hidden");
        setSuccessAlert("hidden");
        break;
      case "completed":
        // Translation request completed, show success message
        setTranslationLoading(false);
        setSuccessAlert("");

        // Pretend like we translated the video ;)
        if (japaneseTranslations == "") {
          setJapaneseTranslations("hidden");
          setEnglishTranslations("");
        } else {
          setEnglishTranslations("hidden");
          setJapaneseTranslations("");
        }
        break;
      case "error":
        // Translation request could not complete, show error message
        setErrorAlert("");
      default:
        setTranslationLoading(false);
        break;
    }
  }, [statusStr]);

  // UI Animation
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          blurFactor: 0.9,
          zoom: 0.4,
        })
      );
    }
    return () => {};
  }, [vantaEffect]);

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      <Container>
        <Stack
          sx={{ mt: "10vh", display: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          gap={2}
        >
          <Typography variant="h1">Video Translation Demo</Typography>
          <Typography variant="body1">
            Check out our lip synced video translation technology by clicking
            the button below.
          </Typography>
          <div id="fakeVideo" ref={myRef}>
            <PlayCircleIcon />
            <div className={"textAnimation " + japaneseTranslations}>
              <TypeAnimation
                sequence={translations[0]}
                wrapper="span"
                speed={25}
                style={{ fontSize: "4em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <div className={"textAnimation " + englishTranslations}>
              <TypeAnimation
                sequence={translations[1]}
                wrapper="span"
                speed={25}
                style={{ fontSize: "4em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
          </div>
          <Alert className={successAlert} severity="success">
            Success! The translation has finished processing.
          </Alert>
          <Alert className={errorAlert} severity="error">
            Oops! Something went wrong.
          </Alert>
          <LoadingButton
            variant="outlined"
            onClick={handleClick}
            loading={translationLoading}
          >
            Generate Translation
          </LoadingButton>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
