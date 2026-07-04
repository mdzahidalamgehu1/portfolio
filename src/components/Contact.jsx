import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const contactCards = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "zahiddohmana@gmail.com",
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/mdzahidalamgehu1",
      link: personalInfo.github,
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      link: personalInfo.linkedin,
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: personalInfo.location,
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 px-5 bg-slate-900 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold uppercase tracking-wider">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="grid sm:grid-cols-2 gap-5">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.title}
                  href={card.link}
                  target={card.link === "#" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 hover:border-blue-500/60 transition"
                >
                  <Icon className="text-blue-400 text-3xl mb-4" />
                  <h3 className="font-bold text-xl">{card.title}</h3>
                  <p className="text-slate-400 mt-2 break-words">{card.value}</p>
                </a>
              );
            })}
          </div>

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-white/[0.04] border border-white/10 rounded-3xl p-7 md:p-8 space-y-5"
          >
            <input name="name" type="text" placeholder="Your Name" required className="input-style" />
            <input name="email" type="email" placeholder="Your Email" required className="input-style" />
            <input name="subject" type="text" placeholder="Subject" required className="input-style" />
            <textarea name="message" rows="6" placeholder="Your Message" required className="input-style resize-none"></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;