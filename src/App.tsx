import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import { Dash } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dash />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

const Layout = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
