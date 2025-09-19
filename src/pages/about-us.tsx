import Ceo from "@/assets/ceo-earthwell.jpg";
import {
  BookOpen,
  Eye,
  Rocket,
  Handshake,
  Heart,
  Users,
  Sparkles,
  ShieldCheck,
  Quote, // Added Quote icon for the CEO's quote
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Helper component for the principle cards
const PrincipleCard = ({ icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // Added amount to trigger animation earlier
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <Card className="bg-white/50 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="items-center flex flex-col">
        {icon}
        <CardTitle className="font-serif text-2xl mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-slate-600 leading-relaxed">{children}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-slate-800 font-sans">
      <div className="container mx-auto px-4 py-24 space-y-24">
        {/* --- Header Section --- */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
            About Us
          </h1>
          <div className="flex justify-center my-6">
            <div className="w-24 h-px bg-black/20" />
          </div>
          <p className="text-xl md:text-2xl font-serif text-slate-600 max-w-4xl mx-auto">
            "Property is a Reflection and Measure of Power and a Statement of
            Personality"
          </p>
        </motion.section>
        

        {/* --- Who We Are Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Earthwell, we take pride in being the finest Real Estate
                Consulting & Advisory service provider with excellence in
                customer relationships. Known and respected for our ability to
                create value for properties, we conduct our business with
                unwavering professionalism.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We strive for continuous improvement across all our areas of
                expertise, searching for new and better ways of helping our
                Clients achieve their goals. Start of any business and the
                growth of business of an organization is always depends upon the
                infrastructure and the Real Estate.
              </p>
            </div>
            <div className="w-full h-80 lg:h-full rounded-lg overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Sophisticated architectural interior"
                className="w-full h-full object-cover"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </motion.section>

        

        {/* --- CEO Speaks Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-serif text-center mb-12">CEO Speaks</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
            {/* Left Column: CEO Introduction */}
            <div className="space-y-6 lg:order-1">
              <h3 className="text-3xl font-serif font-semibold text-slate-700">
                Bijendra Tiwari
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A keen business acumen having thorough knowledge of the Real
                estate market and experience of over 17 years, high service
                standards and diligent customer-centric approach has been
                instrumental in the wealth creation for clients. This dedication
                has steered Earthwell towards great heights of excellence. We
                strongly focus on creating long-lasting customer relationships
                with a personal touch, passion and love, combined with absolute
                care & attention for services; which has made the Earthwell
                brand what it is today.
              </p>
            </div>
            {/* Right Column: CEO Image and Quote */}
            <div className="lg:order-2 flex flex-col items-center space-y-8">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/20">
                <motion.img
                  src={Ceo} // Placeholder image for CEO
                  alt="Bijendra Tiwari, CEO of Earthwell"
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <motion.blockquote
                className="text-center italic text-xl md:text-2xl font-serif text-slate-700 max-w-lg mx-auto relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Quote className="w-10 h-10 text-primary absolute -top-4 -left-4 opacity-20" />{" "}
                {/* Decorative quote icon */}
                “Our way of doing business is akin to that of sculptor who
                carves each piece of art with precision and a great attention to
                detailing”
                <Quote className="w-10 h-10 text-primary absolute -bottom-4 -right-4 opacity-20 rotate-180" />{" "}
                {/* Decorative quote icon */}
              </motion.blockquote>
            </div>
          </div>
        </motion.section>

        {/* --- Core Principles Section --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="mb-16"
          >
            <h2 className="text-4xl font-serif">Our Core Principles</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PrincipleCard
              icon={<BookOpen className="w-10 h-10 text-primary" />}
              title="Our Philosophy"
            >
              To deal openly and honestly with our clients, believing our
              success is based on building enduring, beneficial, and successful
              relationships with them.
            </PrincipleCard>

            <PrincipleCard
              icon={<Eye className="w-10 h-10 text-primary" />}
              title="Vision"
            >
              To be the finest real estate solutions provider and to be amongst
              the most admired and respected firms in the industry.
            </PrincipleCard>

            <PrincipleCard
              icon={<Rocket className="w-10 h-10 text-primary" />}
              title="Mission"
            >
              To deliver customised solutions by seamlessly integrating
              knowledge, creativity and entrepreneurship, fostering long-term
              relationships.
            </PrincipleCard>

            <PrincipleCard
              icon={<Handshake className="w-10 h-10 text-primary" />}
              title="Our Commitment"
            >
              To provide our clients with the highest level of customer service
              satisfaction. Our dedication to achieving exceptional results
              explains our rapid growth.
            </PrincipleCard>

            <PrincipleCard
              icon={<ShieldCheck className="w-10 h-10 text-primary" />}
              title="Honesty"
            >
              Integrity, sincerity, and a sense of honor. Respect for a person’s
              word and for commitments made, refusing any dishonest methods.
            </PrincipleCard>

            <PrincipleCard
              icon={<Heart className="w-10 h-10 text-primary" />}
              title="Trust"
            >
              To give teams responsibility and ensure decisions are made close
              to those who implement them. Ensuring openness and a free flow of
              information.
            </PrincipleCard>

            <PrincipleCard
              icon={<Users className="w-10 h-10 text-primary" />}
              title="Team Spirit"
            >
              Solidarity is necessary to work efficiently with our clients. It
              implies generosity, friendship, loyalty, and complete transparency
              in all our dealings.
            </PrincipleCard>

            <PrincipleCard
              icon={<Sparkles className="w-10 h-10 text-primary" />}
              title="Fun"
            >
              We are proud of what we do and achieve our objectives in the
              never-ending search for top quality. A special sense of
              conviviality is what we call fun.
            </PrincipleCard>
          </div>
        </motion.section>

        {/* --- Closing Statement --- */}
        <motion.section
          className="text-center py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl font-serif text-slate-700 max-w-5xl mx-auto">
            "Our Advisors will work tirelessly to translate your Vision into
            Reality"
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUsPage;
