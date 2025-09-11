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
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Building2
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            contact us
          </h1>
          <div className="w-16 h-1 bg-foreground mx-auto mb-8"></div>
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
                  <div>
                    <Label htmlFor="name" className="text-muted-foreground">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-muted-foreground">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-muted-foreground">
                      Your Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-muted-foreground">
                      Your Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-muted-foreground">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      className="mt-1 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-semibold"
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
            <div className="text-right">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Earthwell Ventures LLP
              </h3>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Earthwell Realty Private Limited
              </h3>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Earthwell Real Estate LLP
              </h3>
              <h3 className="text-xl font-semibold text-primary mb-6">
                Earthwell Business Solutions
              </h3>
            </div>

            {/* Office Address */}
            <Card className="shadow-card border border-border/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Office Address</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Office No. 302, Town Square Shopping Center, Main Airport Road, 
                      Vimannagar, Pune – 411014 Maharashtra | India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-card border border-border/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Tel (Board): +91 20 66810000</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Cellular: +91 9823022097</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">info@earthwellrealty.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-12 h-12 rounded-lg hover:bg-primary hover:text-primary-foreground"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-12 h-12 rounded-lg hover:bg-primary hover:text-primary-foreground"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-12 h-12 rounded-lg hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;