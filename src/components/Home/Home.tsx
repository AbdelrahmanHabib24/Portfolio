import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionId = "projects" | "contact";

interface HomeProps {
  scrollToSection: (sectionId: SectionId) => void;
}

export default function Home({ scrollToSection }: HomeProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const texts = ["a Front-End Developer"];
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const titlePrefixRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  // Typewriter
  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      setDisplayText(
        isDeleting
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1),
      );
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
      setTypingSpeed(isDeleting ? 80 : 150);
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    // Premium GSAP Intro Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Initial State
      gsap.set(imgRef.current, {
        scale: 0.8,
        filter: "blur(10px)",
        opacity: 0,
      });
      gsap.set(titlePrefixRef.current, { y: 20, opacity: 0 });
      gsap.set(subtitleRef.current, { y: 20, opacity: 0 });
      gsap.set(pRef.current, { y: 20, opacity: 0 });
      gsap.set(buttonsRef.current, { y: 20, opacity: 0 });
      gsap.set(socialsRef.current, { scale: 0.9, opacity: 0 });

      // If we have characters in the name, set them up.
      const nameChars = nameRef.current?.children;
      if (nameChars) {
        gsap.set(nameChars, { y: 50, opacity: 0, rotateX: -90 });
      }

      // 2. Animate Image In (Cinematic Focus)
      tl.to(imgRef.current, {
        scale: 1,
        filter: "blur(0px)",
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
      })

        // 3. Prefix "Hi I'm"
        .to(
          titlePrefixRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=1",
        )

        // 4. Stagger Name Characters for a 3D Reveal
        .to(
          nameChars || [],
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.8",
        )

        // 5. Subtitle & Paragraph fade up
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .to(
          pRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )

        // 6. Buttons & Socials pop in
        .to(
          buttonsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          socialsRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.4",
        );

      // Continuous float animation for the image
      gsap.to(imgRef.current, {
        y: "-=15",
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      // Chevron infinite bounce
      gsap.to(chevronRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });

      // Advanced ScrollTrigger (Parallaxing Elements)
      gsap.to(imgRef.current, {
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to([titlePrefixRef.current, nameRef.current, subtitleRef.current], {
        y: 100,
        opacity: 0,
        filter: "blur(5px)",
        stagger: 0.05,
        overwrite: "auto",
        immediateRender: false,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const theName = "Abdelrahman Habib".split("");

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden bg-white dark:bg-black perspective-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-20 lg:px-8 text-center origin-top relative">
        {/* Profile Image (Floating) */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-20"></div>
            <img
              ref={imgRef}
              src="/WhatsApp Image 2025-09-02 at 13.27.26_df05d2f2.jpg"
              alt="Abdelrahman Habib"
              className="w-64 h-64 rounded-full object-cover object-top border-4 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.5)] relative z-10"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold lg:mb-4 leading-tight text-gray-900 dark:text-white flex flex-col items-center">
          <span
            ref={titlePrefixRef}
            className="inline-block mb-2 text-2xl md:text-4xl"
          >
            Hi, I'm{" "}
          </span>
          <br className="hidden" />

          <div
            ref={nameRef}
            className="flex flex-wrap justify-center overflow-visible perspective-1000"
          >
            {theName.map((char, index) => (
              <span
                key={index}
                className={`inline-block ${char === " " ? "w-4 md:w-6" : ""} bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent`}
                style={{ backgroundSize: "200% auto" }}
              >
                {char}
              </span>
            ))}
          </div>
        </h1>

        {/* Subtitle */}
        <h2
          ref={subtitleRef}
          className="bg-gradient-to-r mb-6 mt-4 text-3xl md:text-5xl font-bold from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          {displayText}
          <span className="border-r-2 border-cyan-500 animate-pulse inline-block h-8 md:h-10 ml-1 align-middle"></span>
        </h2>
        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link to="/projects">
            <button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 text-white rounded-full font-medium shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.6)] hover:brightness-110 transition-all duration-300 transform hover:scale-105 active:scale-95"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </button>
          </Link>
          <a
            href="https://wa.me/201023289634"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 rounded-full font-medium border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 hover:shadow-[0_4px_20px_rgba(6,182,212,0.2)] dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Contact Me{" "}
            </button>
          </a>
        </div>

        {/* Social Links */}
        <div ref={socialsRef} className="flex justify-center space-x-6 pb-20">
          {[
            {
              href: "https://github.com/AbdelrahmanHabib24",
              icon: <Github size={24} />,
            },
            {
              href: "https://www.linkedin.com/in/abdelrahmanhabib23/",
              icon: <Linkedin size={24} />,
            },
            {
              href: "mailto:abdelrahmanhabib502@gmail.com",
              icon: <Mail size={24} />,
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full shadow-md transition-all duration-300 bg-white hover:shadow-[0_4px_15px_rgba(6,182,212,0.4)] hover:scale-110 hover:-rotate-12 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Scroll Down Icon */}
        <div
          ref={chevronRef}
          className="absolute bottom-8 inset-x-0 flex justify-center text-gray-500 dark:text-gray-300 pointer-events-none"
        >
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}
