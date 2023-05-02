import { Container } from "../atoms";
import Navbar from "../navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
