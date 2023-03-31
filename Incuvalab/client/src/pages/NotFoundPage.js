import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/general/footer'

export function NotFoundPage() {
  return (
    <>
    <div className='flex flex-col justify-center items-center m-5 p-7'>

            <br />
            <h2 className="text-center">Página no encontrada, Quizá la campaña que busque no esta disponible.</h2>
        </div>

    <Footer/>
    </>
  )
}
