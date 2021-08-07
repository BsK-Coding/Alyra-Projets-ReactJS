// STYLE
const style = {
  backgroundColor: '#AA8888',
}
const gridS = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,300px))",
  gridGap: "2rem"
}
const planetColor = (atr1) => {
  let color1
  let color2 = "#EEEEEE"
  switch (atr1) {
    case 'desert':
      color1 = "#E3AC36"
      break
    case 'grasslands':
      color1 = "#78E049"
      break
    case 'mountains':
      color1 = "#E3D7BA"
      break
    case 'jungle':
      color1 = "#23726A"
      break
    case 'rainforests':
      color1 = "#19685A"
      break
    case 'gas giant':
      color1 = "#B79138"
      break
    case 'ocean':
      color1 = "#285974"
      break
    case 'grassy hills':
      color1 = "#78E049"
      break
    case 'swamps':
      color1 = "#2E1B66"
      break
    default:
      color1 = '#D7CCCD'
      break
  }
  return `linear-gradient(30deg,${color2},${color1})`
}

exports.style = style
exports.gridS = gridS
exports.planetColor = planetColor