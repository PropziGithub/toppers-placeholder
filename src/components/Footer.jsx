import Container from "@/components/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-primary-light py-2">
      <Container>
        <div className="flex flex-col md:flex-row  justify-between items-center md:h-[100px] py-5 ">
          <div className="h-[46px]">
            <img src={"./footer-logo.png"} alt="logo" className="h-full" />
          </div>
          <div className="md:flex flex-col justify-center items-center  my-5 md:my-0">
            <p className="text-[#FFFFFF] ">
              <Link to={"/rules"} className="font-semibold hover:underline">
                Contest Rules{" "}
              </Link>
              |{" "}
              <a
                href="https://www.dropbox.com/s/qwfj5dhxmu0dfy5/Privacy%20Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:underline font-semibold"
              >
                Privacy Policy
              </a>
            </p>
            <p className="text-center text-sm text-[#FFFFFF] md:mt-0">
              Copyright &copy; 2023. All rights Reserved.
            </p>
          </div>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a
              href="https://www.facebook.com/topperspizzacanada/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-[31px] w-[31px] bg-[#FFFFFF] rounded-full cursor-pointer flex-none"
            >
              <img
                className="h-[17px] w-[17px]"
                src="https://cdn-icons-png.flaticon.com/512/160/160154.png"
                alt="facebook logo"
              />
            </a>
            <a
              href="https://www.instagram.com/topperspizzacanada/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-[31px] w-[31px] bg-[#FFFFFF] rounded-full cursor-pointer flex-none"
            >
              <img
                className="h-[17px] w-[17px]"
                src="https://v.fastcdn.co/u/6430ff65/47019940-0-instagram.svg"
                alt="instagram logo"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Footer;
