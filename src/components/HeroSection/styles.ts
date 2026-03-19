import styled from "styled-components";
import { motion } from "motion/react";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 2vh;
`;

export const PhotoColumn = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;

  background: ${({ theme }) =>
    `linear-gradient(60deg, ${theme.COLORS.RED400} 0%, ${theme.COLORS.RED200} 100%)`};

  border-radius: 0 0 350px 350px;
  overflow: hidden;
`;

export const TextColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 5vh;
  gap: 10px;
`;

export const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 4rem);
  font-family: ${({ theme }) => theme.FONT_FAMILY.GEIST};
  font-weight: 200;
`;

export const SubTitle = styled.p`
  font-size: clamp(1rem, 5vw, 1.6rem);
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
  font-weight: 300;
`;

export const Text = styled.p`
  font-size: clamp(0.8rem, 5vw, 1.2rem);
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
  font-weight: 300;
`;
