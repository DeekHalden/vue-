export const setCity = (state, index) => {
  state.selectedCity = index
}

export const showCalc = (state) => {
  console.log(state.calcVisible)
  state.calcVisible = !state.calcVisible
}

