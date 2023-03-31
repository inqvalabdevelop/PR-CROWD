import Footer from "../../components/general/footer"
import { QuestionCards } from "../../components/information/questionCard"
import 'bootstrap/dist/css/bootstrap.min.css'

export function Questions() {

    return (
      <div>
        <div className="my-3">
          <div className="container align-center">
            <h1 className="mt-3 p-3">Preguntas mas Frecuentes</h1>
          </div>
          <br />
          <div className="container align-center">
            <QuestionCards/>
          </div>
        </div>
        <br />
        <Footer/>
      </div>
    )
  }