
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/hero.png';

export default function Home() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/create');
  };

  return (
    <main>
      <section className="hero w-full flex justify-center py-12 px-4">
        <div style={{ backgroundImage: `url(${bgImage})`}} className="w-full max-w-[80vw] min-h-[70vh] bg-cover bg-center rounded-xl flex items-center justify-center text-white px-6">
          <div className="max-w-2xl ">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build apps faster with AppForge
            </h1>
            <p className="mb-6 text-lg">
              AppForge is a low-code/no-code platform that empowers anyone to create powerful applications
              without writing a single line of code.
            </p>
            <button onClick={handleStartClick} className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
              Start for free
            </button>
          </div>
        </div>
      </section>

      <section className='w-full flex flex-col justify-center py-12 px-4'>
        <h1 className='text-2xl md:text-3xl font-bold mb-4'>Key Features</h1>
        <p className='mb-6 text-lg'>AppForge offers a comprehensive suite of features designed to streamline app development
and empower users of all skill levels.</p>
        <div className='features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='feature bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-2'>Drag-and-Drop Interface</h2>
            <p>Intuitive drag-and-drop interface for easy app building.</p>
          </div>
          <div className='feature bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-2'>Pre-built Components</h2>
            <p>Access a library of pre-built components to speed up development.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
