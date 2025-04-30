import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/signUpPage'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import ProductsPage from './pages/productsPage'
import ProductAdding from './pages/productAdding'
import Dashboardhome from './layout/dashboardhome'
import ProductView from './layout/productView'
import AllusersView from './layout/allusersView'
import OrderManageView from './layout/orderManageView'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/products' element={<ProductsPage/>} />
          <Route path='/seller/productAdd' element={<ProductAdding/>} />
          <Route path='/dashboard' element={<Dashboardhome />}/>
          <Route path='/dashboard/seller/my-products' element={<ProductView />}/>
          <Route path='/dashboard/admin/manage-users' element={<AllusersView />}/>
          <Route path='/dashboard/seller/manage-orders' element={<OrderManageView/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
