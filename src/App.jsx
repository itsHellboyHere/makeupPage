import { BrowserRouter,createBrowserRouter, RouterProvider } from 'react-router-dom';
import { action as Booking } from './pages/Book';
import{
About,Home,Book,ServicesPage,GalleryPage,LandingPage,Error
} from './pages'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[
       {
    index:true,
    element:<LandingPage></LandingPage>,
    
  },
       {
        path:'/services',
    element:<ServicesPage></ServicesPage>,
      },
      {
        path:'/about',
    element:<About></About>,
      },
      {
        path:'/gallery',
    element:<GalleryPage></GalleryPage>,
      },
       {
        path:'/book',
    element:<Book></Book>,
    action:Booking,
      },
    ]
    
  },
  
]
  
)
const App = () => {
  return (
      <RouterProvider router={router}/>
  )
}
export default App