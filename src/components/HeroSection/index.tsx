import { Column, Container, Image, PhotoColumn, Title, SubTitle, TextColumn, Text } from "./styles";

import FotoVictor from "@assets/fotoVictor.jpeg";

const ImgVariants = {
  initial: {
    scale: 1.2,
  },

  animate: {
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: "easeInOut",

      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

export const HeroSection = () => {
  return (
    <Container>
      <Column>
        <TextColumn>
          <SubTitle>Olá! Me chamo <b>Victor</b>,</SubTitle>

          <Title>
            <b>Front-End Engineer</b> e QA Analyst
          </Title>

          <Text>
            Crio ideias, modelo aplicações e desenvolvo soluções, com foco em qualidade, busco sempre
            o aperfeiçoamento!
          </Text>
        </TextColumn>
      </Column>

      <PhotoColumn>
        <Image
          src={FotoVictor}
          alt="Foto de Victor"
          draggable={false}
          variants={ImgVariants}
          initial="initial"
          animate="animate"
        />
      </PhotoColumn>

      <Column></Column>
    </Container>
  );
};
