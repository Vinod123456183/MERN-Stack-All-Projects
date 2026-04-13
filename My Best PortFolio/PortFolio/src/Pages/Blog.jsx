import React from "react";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <>
      <div className=" font-kodchasan  max-w-[1250px] mx-auto  ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className=" flex items-center justify-center  gap-2 md:gap-4 font-bold text-center mb-6"
        >
          <div>
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
              alt=""
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </div>
          <div className="text-[19px] md:text-[24px] lg:text-[34px]">
            {/* <p className="text-[25px] md:text-[40px]"> */}
            Blog with Right Sidebar
            {/* </p> */}
          </div>
          <div>
            <img
              src="https://wpriverthemes.com/landing/gridx-html/assets/images/star-2.png"
              alt=""
              className="h-8 w-8 md:h-12 md:w-12"
            />
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row p-5   gap-10  rounded-lg shadow-lg overflow-hidden">
          <motion.div className="  rounded-lg mt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.2 }}
              className=""
            >
              <img
                src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mobile view of blog post"
                className="  md:w-full md:h-[400px] object-cover "
              />
            </motion.div>
            <div className="p-2  md:p-4  ">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="  text-blue-500 text-sm"
              >
                20 Sep 2024 - Comments (4) - Share (7)
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="text-[14px] lg:text-2xl font-bold text-gray-200 mt-6"
              >
                Machine Learning
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="text-gray-300 mt-2"
              >
                "Currently, I am working on a machine learning project and
                diving into new concepts. This journey allows me to explore
                various algorithms and techniques, enhancing my understanding of
                data analysis and model development. I’m excited to experiment
                with different tools and frameworks, which not only improve my
                technical skills but also inspire my creativity. Each step of
                the project brings new challenges and learning opportunities,
                making it an enriching experience overall."
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className=" p-4 max-w-[1000px]  flex flex-col bg-[#131313] w-[120%]  rounded-3xl shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-200 mt-3 mb-3">
              RECENT POSTS
            </h3>
            <ul className=" text-gray-400 mt-2 space-y-7 lg:space-y-10 text-[13px] md:text-[17px]">
              <p>ML Model On Prediction Breast Cancer Prediction System.</p>
              <p>ML Model On Car Prediction System</p>
              <p>ML Model On Gold Price Cancer Prediction System</p>
              <p>ML Model On Wine Quality Test </p>
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row p-5   gap-10  rounded-lg shadow-lg overflow-hidden">
          <motion.div className="  rounded-lg mt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.2 }}
              className=""
            >
              <img
                src="https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?s=1024x1024&w=is&k=20&c=1Gp42CNED2rctVjUgHazI_2YmauuP0zb6RYuGRacwaY="
                alt="Mobile view of blog post"
                className="  md:w-full md:h-[400px] object-cover "
              />
            </motion.div>
            <div className="p-2  md:p-4  ">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="  text-blue-500 text-sm"
              >
                20 Sep 2024 - Comments (4) - Share (7)
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="text-[14px] lg:text-2xl font-bold text-gray-200 mt-6"
              >
                Generative AI
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="text-gray-300 mt-2"
              >
                "This generative AI project focuses on creating personalized
                content tailored to user preferences. By leveraging advanced
                natural language processing, the model learns from user
                interactions to generate engaging articles and social media
                posts. Ethical considerations are prioritized to ensure that the
                output remains relevant and appropriate. Continuous feedback and
                refinement are integral to enhancing the model’s creativity and
                quality. Ultimately, the project aims to empower users with
                innovative tools that inspire and elevate their creative
                workflows."
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className=" p-4 max-w-[1000px]  flex flex-col bg-[#131313] w-[120%]  rounded-3xl shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-200 mt-3 mb-3">
              RECENT POSTS
            </h3>
            <ul className=" text-gray-400 mt-2 space-y-7 lg:space-y-10 text-[13px] md:text-[17px]">
              <p>Stepping A Step Into Adv React </p>
              <p>Stepping A Step Into Backend</p>
              <p>Stepping A Step Into ML and AI</p>
              <p>Stepping A Step Into GenAI</p>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;
