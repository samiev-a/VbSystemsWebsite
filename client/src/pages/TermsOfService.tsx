import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#121632] mb-4">Terms of Service</h1>
            <p className="text-neutral-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">1. Acceptance of Terms</h2>
              <p className="text-neutral-700 mb-4">
                By accessing and using the services provided by VB Systems Communication ("Company," "we," "our," or "us"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">2. Services Description</h2>
              <p className="text-neutral-700 mb-4">
                VB Systems Communication provides IT solutions, surveillance systems, and networking services including:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-4">
                <li>CCTV and IP surveillance system installation and maintenance</li>
                <li>Computer and IT support services</li>
                <li>Data networking and structured cabling</li>
                <li>IT consulting and technical support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">3. Service Terms and Conditions</h2>
              <p className="text-neutral-700 mb-4">
                Our services are subject to the following terms:
              </p>
              <ul className="list-disc pl-6 text-neutral-700 mb-4">
                <li>Service agreements will be provided for each specific project</li>
                <li>Payment terms will be outlined in individual contracts</li>
                <li>Warranty terms vary by service and equipment provided</li>
                <li>Maintenance and support terms are defined in service agreements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">4. User Responsibilities</h2>
              <p className="text-neutral-700 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-neutral-700 mb-4">
                <li>Provide accurate information when requesting services</li>
                <li>Maintain appropriate access for service delivery</li>
                <li>Use surveillance systems in compliance with applicable laws</li>
                <li>Notify us promptly of any service issues</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">5. Privacy and Data Protection</h2>
              <p className="text-neutral-700 mb-4">
                We are committed to protecting your privacy. Our data handling practices are outlined in our Privacy Policy. By using our services, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">6. Limitation of Liability</h2>
              <p className="text-neutral-700 mb-4">
                To the fullest extent permitted by law, VB Systems Communication shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">7. Service Availability</h2>
              <p className="text-neutral-700 mb-4">
                While we strive to provide continuous service, we do not guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or other operational reasons.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">8. Changes to Terms</h2>
              <p className="text-neutral-700 mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify users of significant changes. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#121632] mb-4">9. Contact Information</h2>
              <p className="text-neutral-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="text-neutral-700">
                <p>VB Systems Communication</p>
                <p>Phone: <a href="tel:8889169166" className="text-[#00A3E0] hover:underline">(888) 916-9166</a></p>
                <p>Fax: (469) 728-7455</p>
                <p>Email: <a href="mailto:info@vbsystems.com" className="text-[#00A3E0] hover:underline">info@vbsystems.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}