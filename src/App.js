import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
        <Sidebar />
        <div className='flex-1'>
            <Navbar />
            <Header />
            <div className="p-6">
                <div className="text-xl">
                    Welcome to the Dashboard!
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
