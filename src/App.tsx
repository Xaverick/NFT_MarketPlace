import BaseLayout from './components/layouts/BaseLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Propertydisplay from './components/Propertydisplay/Propertydisplay.tsx';
import Homepage from './components/Homepage.tsx';

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/:property' element={<Propertydisplay />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  )
}

export default App
