
import { useGradients } from "../context/GradientsContext"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {
  const { loading, error } = useGradients()

  return (
    <>
      {loading ? (
        <p className="text-center">loading...</p>
      ) : (
        <>
          <GradientsSelect />
          {error && <p>{error}</p>}
          <GradientsList />
        </>
      )
      }
    </>
  )
}

export default Gradients