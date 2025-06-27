import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-[#121632] mb-4">Privacy Policy</h1>
            <p className="text-neutral-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">1. Information We Collect</h2>
              <p className="text-neutral-700 mb-4">
                VB Systems Communication ("we," "our," or "us") collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-4">
                <li>Contact us through our website forms</li>
                <li>Request our services or support</li>
                <li>Subscribe to our communications</li>
                <li>Interact with our surveillance systems (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">2. How We Use Your Information</h2>
              <p className="text-neutral-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-neutral-700 mb-4">
                <li>Provide, maintain, and improve our IT and surveillance services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical updates and service information</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">3. Information Sharing</h2>
              <p className="text-neutral-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share information:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-4">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">4. Data Security</h2>
              <p className="text-neutral-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">5. Your Rights</h2>
              <p className="text-neutral-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-neutral-700 mb-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Object to certain processing of your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">6. Contact Us</h2>
              <p className="text-neutral-700 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="text-neutral-700">
                <p>VB Systems Communication</p>
                <p>Phone: <a href="tel:8889169166" className="text-[#00A3E0] hover:underline">(888) 916-9166</a></p>
                <p>Email: <a href="mailto:info@vbsystems.com" className="text-[#00A3E0] hover:underline">info@vbsystems.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}