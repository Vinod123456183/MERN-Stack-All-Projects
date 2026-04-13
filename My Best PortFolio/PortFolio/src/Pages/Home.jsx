import Signature from "../Components/UsedComponents/Signature";
import NameDetails from "../Components/UsedComponents/NameDetails";
import MovingDiv from "../Components/UsedComponents/MovingDiv";
import MultipleIcons from "../Components/UsedComponents/MultipleIcons";
import Plus from "../Components/UsedComponents/Plus";
import LetsWorkTogether from "../Components/UsedComponents/LetsWorkTogether";
import TwoIcons from "../Components/UsedComponents/TwoIcons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className=" flex lg:flex-row mb-4 flex-col items-center justify-center mx-auto px-3 lg:px-16 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="cursor-pointer bg-gradient-to-r from-[#555555] via-[#252525] to-[#161616] rounded-3xl w-full p-3 md:p-4 lg:p-5 lg:w-1/2 h-full"
        >
          <Link to="/about">
            <NameDetails />
          </Link>
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:gap-1 xl:gap-2 h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="w-full"
          >
            <MovingDiv />
          </motion.div>

          <div className="h-full flex items-center flex-col ssm:flex-row w-full gap-2">
            <Link to="/aboutme" className="w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4 }}
                className="cursor-pointer"
              >
                <Signature
                  text="MORE ABOUT ME"
                  subtitle="Credentials"
                  imageSrc="https://wpriverthemes.com/landing/gridx-html/assets/images/sign.png"
                  iconSrc="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
                />
              </motion.div>
            </Link>

            <Link to="/work" className="w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4 }}
                className="cursor-pointer"
              >
                <Signature
                  text="SHOWCASE"
                  subtitle="Projects"
                  imageSrc="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png"
                  iconSrc="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-3 flex-col md:flex-row items-center mb-4 mx-auto px-3 lg:px-16">
        <Link to="/blog" className=" w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="cursor-pointer "
          >
            <Signature
              text="GFont"
              subtitle="Blog"
              imageSrc="https://wpriverthemes.com/landing/gridx-html/assets/images/gfonts.png"
              iconSrc="https://wpriverthemes.com/landing/gridx-html/assets/images/icon.svg"
            />
          </motion.div>
        </Link>

        <Link to="/offering" className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="cursor-pointer rounded-2xl bg-[#151414] w-full mx-auto"
          >
            <MultipleIcons />
          </motion.div>
        </Link>

        <Link to="/allprofiles" className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="flex w-full"
          >
            <TwoIcons />
          </motion.div>
        </Link>
        {/* </Link> */}
      </div>

      <div className="flex gap-3 flex-col w-full xl:flex-row items-center mb-4 mx-auto px-3 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="flex rounded-2xl flex-col md:flex-row w-full mx-auto p-4 bg-[#151414] gap-4"
        >
          <Plus value="+0" year="Year" experience="Experience" />
          <Plus value="+04" year="Clients" experience="Worldwide" />
          <Plus value="+10" year="Total" experience="Projects" />
        </motion.div>

        <Link to="/contact" className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="cursor-pointer bg-[#151414] w-full p-4 pt-2 rounded-xl"
          >
            <LetsWorkTogether />
          </motion.div>
        </Link>
      </div>
    </>
  );
}

export default Home;
