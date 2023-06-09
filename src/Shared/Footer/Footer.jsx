import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import React from "react";
import logo from "../../assets/logo/logo.webp";

const FooterComponents = () => {
  return (
    <div className="container mx-auto">
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 lg:px-12">
            <div>
              <Footer.Brand src={logo} className="lg:h-24" />
              <p className="text-slate-600">Toy Market Industries Ltd. <br /> Providing reliable tech since 1992</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-5 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Toy News</Footer.Link>
                  <Footer.Link href="#">Toy About</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Support" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">HelpDesk</Footer.Link>
                  <Footer.Link href="#">Docs</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Download" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">iOS</Footer.Link>
                  <Footer.Link href="#">Android</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Toy Market Industries™" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponents;
