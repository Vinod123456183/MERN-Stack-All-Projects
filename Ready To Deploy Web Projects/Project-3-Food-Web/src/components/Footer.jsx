
function Footer() {
    return (
        <footer className="bg-background text-foreground py-8 max-w-[2560px] p-4 m-auto">
          <div className="container mx-auto flex flex-col sm:flex-row   justify-between items-center gap-7 ">
            <div className="mb-6 md:mb-0  ">
              <h1 className="text-4xl font-bold text-primarytext-start ">BURGER</h1>
              <p className="text-muted-foreground mt-2 text-start ">Lorem ipsum dolor sit amet,luctus consectetur adipiscing elit.
               <p>
                nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </p>
            </div>
            <div className="flex flex-col text-start   "  >
              <h2 className="text-lg font-semibold">SUPPORT</h2>
              <ul className="mt-2 text-start">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Term & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col  ">
              <h2 className="text-lg font-semibold">CONTACT</h2>
              <p className="mt-2">
                <span className="font-semibold">PHONE:</span> +1 000 000 0000
              </p>
              <p className="mt-2">
                <span className="font-semibold">EMAIL:</span> burger.info@email.com
              </p>
              <p className="mt-2">
                <span className="font-semibold">ADDRESS:</span> Address goes here
              </p>
            </div>
            <div className="flex flex-col ">
              <h2 className="text-lg font-semibold">FOLLOW US</h2>
              <div className="flex  mt-2 flex-col  ">
                <a href="#" className="text-muted-foreground hover:text-primary hover:translate-x-3 hover:text-[#0165E1] duration-300 ">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary hover:translate-x-3 hover:text-[#1D9BF0] duration-300  ">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary hover:text-pink-500  hover:translate-x-2 duration-300  ">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 p-2  ">
            <p className="text-muted-foreground">Copyright © 2023. All rights reserved.</p>
          </div>
        </footer>
  )
}

export default Footer
