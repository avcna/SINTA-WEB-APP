import Navbar from "../components/Navbar";
import { Title } from "./Detail";
import { Desc } from "../components/DetailComponents";
import { Margin, Section } from "./TentangKami";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <Margin>
        <Section>
          <Title>Pertanyaan 1</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliq.
          </Desc>
        </Section>
      </Margin>
    </>
  );
};

export default FAQ;
