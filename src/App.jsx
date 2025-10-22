// import { useState } from 'react'
// import Header from '../components/Header/Header'
// import Sidebar from '../components/Sidebar/Sidebar'
// import './index.css'
// const App = () => {

//   const [showSideBar, setShowSideBar] = useState(false)

//   return (
//     <>
//       <div className="container"></div>
//       <Header onToggleSidebar={setShowSideBar} />
//       {showSideBar && <Sidebar className='sidebar' />}
//     </>
//   )
// }

// export default App

import './App.css'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import LocationCard from '../components/LocationCard/LocationCard'

const App = () => {
  // return (<>
  //   <Header />
  //   <Main />
  //   <Footer />
  // </>
  // )
  return (
    <>
      <LocationCard />
    </>
  )
}

export default App