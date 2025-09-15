import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is DEGENZ?",
      answer: "DEGENZ is a hilarious crypto cartoon series in the style of South Park and Family Guy. Follow Steve and Lenny, two crypto degenerates trying to build a launchpad while facing all the chaos of the crypto world - corrupt VCs, greedy influencers, code errors, and more!"
    },
    {
      question: "What is it about?",
      answer: "The show follows Steve and Lenny as they navigate the wild world of cryptocurrency. Each episode tackles real crypto problems with humor - from buggy smart contracts to dealing with sketchy investors and overhyped influencers. It's a satirical take on crypto culture that anyone in the space will relate to."
    },
    {
      question: "How long are the episodes?",
      answer: "Each episode is 2-3 minutes long - perfect for a quick laugh during your coffee break or while checking your portfolio losses!"
    },
    {
      question: "When do new episodes come out?",
      answer: "Season One is currently rolling out! Follow @DegenzTheShow on Twitter to get notified when new episodes drop. We're aiming for regular releases throughout the season."
    },
    {
      question: "Who are the main characters?",
      answer: "Meet Steve (the bearded guy in the hoodie) and Lenny (the one with glasses) - two crypto enthusiasts with big dreams but even bigger problems. They're trying to build the next big crypto launchpad, but everything that can go wrong... does go wrong."
    },
    {
      question: "Is this financial advice?",
      answer: "Absolutely not! This is pure entertainment. We're here to make you laugh, not to give you investment advice. Always DYOR (Do Your Own Research) and don't trust cartoon characters with your money!"
    },
    {
      question: "Where can I watch?",
      answer: "All episodes are available right here on this website! We embed them directly from our YouTube channel so you can binge-watch Steve and Lenny's misadventures."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-secondary">

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-fredoka font-bold text-primary text-outline mb-6 bounce-in">
            FAQ
          </h2>
          <p className="text-2xl text-primary font-nunito font-bold">
            Everything you need to know about DEGENZ!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-4 border-black rounded-lg overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              >
                <AccordionTrigger className="text-left px-3 py-2 hover:no-underline data-[state=open]:bg-primary/5 transition-colors group">
                  <h3 className="text-lg font-fredoka font-bold text-primary pr-3 group-hover:translate-x-1 transition-transform">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-3">
                  <div className="relative border-t border-primary/10">
                    <p className="text-sm font-nunito text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Social CTA */}
        <div className="text-center mt-16">
          <div className="cartoon-card inline-block">
            <h3 className="text-3xl font-fredoka font-bold text-primary mb-4">
              Got More Questions?
            </h3>
            <p className="text-lg font-nunito text-muted-foreground mb-6">
              Hit us up on Twitter for behind-the-scenes content and updates!
            </p>
            <button 
              className="cartoon-button bg-secondary text-black"
              onClick={() => window.open('https://twitter.com/DegenzTheShow', '_blank')}
            >
              FOLLOW @DegenzTheShow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;