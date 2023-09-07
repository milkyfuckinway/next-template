import TypingComponent from '@/components/TypingComponent';

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <h2>
          <TypingComponent sequence={['Main page', 1000, 'Главная страница', 1000]} />
        </h2>
      </div>
    </section>
  );
}
