import {
  BookOpen,
  Eye,
  Rocket,
  Handshake,
  Heart,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Helper component for the principle cards
const PrincipleCard = ({ icon, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <Card className="bg-white/50 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="items-center">
        {icon}
        <CardTitle className="font-serif text-2xl mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
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
          viewport={{ once: true }}
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
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </motion.section>

        {/* --- Core Principles Section --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
          viewport={{ once: true }}
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
