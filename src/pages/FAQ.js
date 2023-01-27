import Navbar from "../components/Navbar";
import { Title } from "./Detail";
import { Desc } from "../components/DetailComponents";
import { Margin, Section } from "./TentangKami";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { quest } from "./test";

const FAQ = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);
  return (
    <>
      <Navbar />
      <Margin>
        <Section>
          {quest.map((quest) => {
            return (
              <>
                <Title>{quest.q}</Title>
                <Desc>{quest.a}</Desc>
              </>
            );
          })}
        </Section>
      </Margin>
      <Footer />
    </>
  );
};

export default FAQ;
