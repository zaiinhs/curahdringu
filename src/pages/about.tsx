import { GetServerSideProps } from "next";

// Halaman /about lama dialihkan ke /profil.
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/profil",
      permanent: true,
    },
  };
};

const About = () => null;

export default About;
