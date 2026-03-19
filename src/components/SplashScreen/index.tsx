import { useEffect, useState } from "react";

import { Content, Title, ProgressBar, ProgressFill, Subtitle, Container } from "./styles";

type SplashScreenProps = {
  onComplete?: () => void;
};

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        onComplete?.();
      }, 200);
    }
  }, [progress, onComplete]);

  return (
    <Container
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Victor Santos - Developer
        </Title>

        <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          {progress < 100 ? "Preparando..." : "Pronto!"}
        </Subtitle>

        <ProgressBar>
          <ProgressFill
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </ProgressBar>
      </Content>
    </Container>
  );
};
