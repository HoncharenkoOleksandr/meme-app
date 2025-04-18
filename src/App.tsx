import { Spinner } from '@heroui/spinner';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import { useFetchMemes } from './hooks/useFetchMemes';
import ListPage from './pages/ListPage';
import TablePage from './pages/TablePage';

export default function App() {
  const [memes, setMemes, loading, error] = useFetchMemes();

  return (
    <>
      <Navbar />
      <main className="p-4">
        {loading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center">
            <p className="text-danger">Error: {error}</p>
          </div>
        ) : (
          <Routes>
            <Route element={<Navigate replace to="/table" />} path="/" />
            <Route element={<TablePage memes={memes} setMemes={setMemes} />} path="/table" />
            <Route element={<ListPage memes={memes} />} path="/list" />
          </Routes>
        )}
      </main>
    </>
  );
}
