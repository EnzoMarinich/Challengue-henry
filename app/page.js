
import axios from 'axios'
import { Button } from './components/Button'


export default async function Home() {

  axios.defaults.baseURL = 'https://challengue-henry-dv5kt6186-enzomarinich.vercel.app/'


  return (
    <div className='h-screen flex flex-col items-center pt-20 text-orange-400 font-extrabold text-3xl'>
      <h1>Challengue Henry</h1>
      <div className='flex gap-10 mt-28'>
        <Button className="rounded-md bg-black font-semibold   text-orange-400 p-4 hover:bg-orange-400 hover:text-black transition-all" label="Completar encuesta" route="/questions"/>
        <Button className="rounded-md bg-black font-semibold text-orange-400 p-4 hover:bg-orange-400 hover:text-black transition-all" label="Ver respuestas" route="/answers" />
      </div>
    </div>
  )
}
