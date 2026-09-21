import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";
import contactImg from "../../assets/contactImg.jpg";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
  const formRef = useRef<any>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ikboljon",
          from_email: form.email,
          to_email: "ikboljonme@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: any) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className={classes.container}>
      <motion.div variants={slideIn("top", "tween", 0.2, 1)}>
        <p className={classes.sectionSubText}>Contact</p>
        <h2 className={classes.sectionHeadText}>
          With <span>Me</span>
        </h2>
      </motion.div>
      <div className={classes.contactWrapper}>
        <div className={classes.contactSend}>
          <div className={classes.imgTitle}>
            <h1>Say Hi! 🙌</h1>
            <h2>Reach out and let's bring your ideas to life!</h2>
            <h2>I'm available for freelance work.</h2>
            <p>
              <MdOutlineEmail size={30} />
              <Link to="mailto:ikboljonme@gmail.com">ikboljonme@gmail.com</Link>
            </p>
            <img src={contactImg} width={300} alt="" />
          </div>
          <div>
            <form>
              <div className={classes.btnInput}>
                <button>
                  <FaUser className={classes.faUser} size={22} />
                </button>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={classes.btnInput}>
                <button>
                  <MdEmail className={classes.faUser} size={22} />
                </button>
                <input type="email" placeholder="Your email" />
              </div>
              <div className={classes.btnInput}>
                <button>
                  <MdMessage className={classes.faUser} size={22} />
                </button>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </div>
              <div className={classes.submitBtn}>
                <button>
                  Submit <BsSendFill className={classes.sendIcon} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact", "#f8f8f8");
