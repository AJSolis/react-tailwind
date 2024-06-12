import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyNextApp</h1>
        <p className="text-lg">This is the homepage.</p>
      </main>
    </div>
  );
}
