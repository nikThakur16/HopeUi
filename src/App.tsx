
import './styles/App.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  // window.addEventListener("beforeunload", () => {
  //   localStorage.removeItem("token");
  // });
  


  return (
    < div className="h-full w-full overflow-x-hidden">

    <AppRoutes/>
    </div>
  )
}

export default App
