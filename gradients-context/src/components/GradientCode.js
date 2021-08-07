const GradientCode = ({ colorStart, colorEnd }) => {
  return (
    <code>
      background-image: linear-gradient(to right, {colorStart}, {colorEnd});
    </code>
  )
}

export default GradientCode
