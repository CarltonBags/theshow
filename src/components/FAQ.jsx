import { useState } from 'react';

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-fredoka font-bold text-primary text-outline mb-4 bounce-in">
            FAQ
          </h2>
          <p className="text-xl text-muted-foreground font-nunito font-semibold">
            Everything you need to know about DEGENZ!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`cartoon-card mb-6 slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="text-2xl font-fredoka font-bold text-primary pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-lg font-nunito text-muted-foreground leading-relaxed border-t-4 border-primary/20 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
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