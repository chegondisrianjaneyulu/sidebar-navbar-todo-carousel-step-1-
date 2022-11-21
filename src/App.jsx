import './App.css'
import CheckInCheckOut from './components/CheckInCheckOut/CheckInCheckOut'
import Step1Form from './components/Step1Form/Step1Form'
import SideBarData from './components/SideBarData/SideBarData'
import HolidayKeepers from './components/HolidayKeepers/HolidayKeepers'
import AxiosApiCall from './components/AxiosApiCall/AxiosApiCall'
import TodoApi from './components/TodoApi/TodoApi'
import TodoAxiousApi from './components/TodoAxiousApi/TodoAxiousApi'
import Controller from 'react-datepicker'
import QuickBookNavbar from './components/QuickBookNavbar/QuickBookNavbar'
import Step3Form from './components/Step3Form/Step3Form'

// carousel-today-afternoon-----completed
// youtube-video--today-afternoon------completed
// todo-api----------------------------completed
// multilevel-sidebar---without-using-tools----completed
// axios-req-update-post-delete------completed
// form-country-code - 3---15/11/22 --after-home-complete-it-11/17/2022-afternoon--completed
// placehloder go up - 4---15/11/22--after-home-complete-it-11/17/2022-afternoon--completd
// quick-navbar---11/17/2022-morning---completed


// mrng-in-office - check-in check-out date--11/17/2022-afternoon
// quick-navbar---11/17/2022-morning---completed
// redux-dispatch
// api-headers-token


//<SideBarData/>
//<HolidayKeepers/>
//<TodoApi/>
//<TodoAxiousApi/>

export default function App() {
  return (
    <div className='h-screen w-screen'>
      {/* <SideBarData/> */}
      {/* <HolidayKeepers/> */}
      {/* <TodoApi/> */}
      {/* <TodoAxiousApi/> */}
      {/* <QuickBookNavbar/> */}
      <Step1Form/>
      <Step3Form/>
      {/* <CheckInCheckOut/> */}
    </div>
  )
}

