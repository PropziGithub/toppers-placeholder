import Container from "@/components/Container";
import HeaderLogo from "@/components/HeaderLogo";

const Header = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <Container className="flex justify-center items-center px-4 py-6">
        <HeaderLogo className="h-14 w-auto" />
      </Container>
    </section>
  );
};
export default Header;
