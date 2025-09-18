import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="shadow-card border border-border/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { id: "name", label: "Your Name", type: "text" },
                    { id: "email", label: "Your Email", type: "email" },
                    { id: "phone", label: "Your Phone", type: "tel" },
                    { id: "subject", label: "Your Subject", type: "text" },
                  ].map((field) => (
                    <div key={field.id}>
                      <Label
                        htmlFor={field.id}
                        className="text-sm text-muted-foreground"
                      >
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        type={field.type}
                        value={(formData as any)[field.id]}
                        onChange={(e) =>
                          handleInputChange(field.id, e.target.value)
                        }
                        className="mt-1"
                        required={field.id !== "phone"} // phone optional
                      />
                    </div>
                  ))}

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm text-muted-foreground"
                    >
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={6}
                      className="mt-1 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold rounded-lg"
                  >
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Company Information */}
          <div className="space-y-8">
            {/* Company Names */}
            <div className="space-y-2">
              {[
                "Ventures LLP",
                "Realty Private Limited",
                "Real Estate LLP",
                "Business Solutions",
              ].map((suffix, i) => (
                <div key={i} className="flex items-baseline">
                  <span
                    className=" w-48"
                    style={{
                      fontFamily: "Stencil, sans-serif",
                      fontSize: "30px",
                      color: "#fd0002",
                    }}
                  >
                    EARTHWELL
                  </span>
                  <span
                    className="text-foreground"
                    style={{
                      fontSize: "30px",
                      fontFamily: "bookman old style",
                    }}
                  >
                    {suffix}
                  </span>
                </div>
              ))}
            </div>

            {/* Office Address */}
            <Card className="shadow-card border border-border/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg text-foreground mb-1">
                      Office Address
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Office No. 302, Town Square Shopping Center, Main Airport
                      Road, <br />
                      Vimannagar, Pune – 411014 <br />
                      Maharashtra | India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Box */}
            <div className="border border-border rounded-xl p-6 shadow-md space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <p className="text-sm font-medium text-foreground">
                  Tel (Board): +91 20 66810000
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <p className="text-sm font-medium text-foreground">
                  Cellular: +91 9823022097
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-600" />
                <p className="text-sm font-medium text-foreground">
                  info@earthwellrealty.com
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Social Media
              </h3>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <Button
                    key={i}
                    size="sm"
                    variant="outline"
                    className="w-12 h-12 rounded-lg hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
