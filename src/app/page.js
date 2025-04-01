"use client";
import { Button } from "@/components/ui/button";
import { Code, Terminal, Mail, Github, Linkedin, Twitter, BookOpen, Briefcase } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Home() {
  const { theme } = useTheme();
  const gradient = theme === 'dark'
    ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)'
    : 'linear-gradient(45deg, #2563eb, #7c3aed, #db2777)';

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center"> {/* Added flex centering */}
        {/* Hero Section - Fully Centered */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 -z-10"
            style={{
              background: gradient,
              filter: 'blur(100px)'
            }}
          />

          <div className="container px-4 md:px-6 mx-auto h-full flex items-center justify-center"> {/* Added flex centering */}
            <div className="flex flex-col items-center text-center w-full">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-3xl space-y-6 flex flex-col items-center"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                  <span className="block text-8xl font-medium text-muted-foreground mb-4">
                    Hi
                  </span>
                  <span className="block text-2xl font-medium text-muted-foreground mb-4">
                    I`m
                  </span>

                  <motion.span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: gradient,
                      backgroundSize: '200% 200%',
                      animation: 'gradientShift 8s ease infinite'
                    }}
                  >
                    Manoj Gohel
                  </motion.span>
                </h1>

                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-2xl text-muted-foreground"
                >
                  Software Engineer & Digital Craftsman
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg text-muted-foreground max-w-2xl"
                >
                  I architect exceptional digital experiences that blend cutting-edge
                  technology with elegant design principles.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex gap-4 pt-4"
                >
                  <Button size="lg" asChild>
                    <Link href="/posts">
                      <Terminal className="h-5 w-5 mr-2" /> View Posts
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#contact">
                      <Mail className="h-5 w-5 mr-2" /> Get In Touch
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex gap-4 pt-2"
                >
                  {/* Social links with hover effects */}
                  {[
                    { icon: Github, url: "https://github.com/manojgohel" },
                    { icon: Twitter, url: "https://twitter.com/manojgohel" }
                  ].map((social, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary transition-all"
                      asChild
                    >
                      <Link href={social.url} target="_blank">
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  ))}
                  <ThemeToggle />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
