import Footer from './layout/Footer';
import Hero from './scenes/Hero';
import Middle from './scenes/Middle';

const App = () => {
  return (
    <div className="min-h-screen min-w-[280px]">
      <Hero />
      <Middle />
      <Footer />
    </div>
  );
};

export default App;
