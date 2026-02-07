import { Hero } from './components/Hero';
import { JourneyGallery } from './components/JourneyGallery';
import { Message } from './components/Message';
import { ProposalInteraction } from './components/ProposalInteraction';

function App() {
  return (
    <main className="font-sans antialiased text-mowa-black bg-mowa-parchment overflow-x-hidden">
      <Hero />
      <JourneyGallery />
      <Message />
      <ProposalInteraction />
    </main>
  );
}

export default App;
