import styled from "styled-components";
import { motion } from "motion/react";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.COLORS.BLUE200} 0%, ${theme.COLORS.BLUE400} 100%)`};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: white;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 4rem);
  font-family: ${({ theme }) => theme.FONT_FAMILY.GEIST};
  font-weight: 200;
  margin-bottom: ${({ theme }) => theme.SPACING.MD}px;
`;

export const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: ${({ theme }) => theme.SPACING.XL}px;
`;

export const ProgressBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin: 0 auto;
  overflow: hidden;
`;

export const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 2px;
`;
