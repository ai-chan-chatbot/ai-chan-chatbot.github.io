import * as React from 'react'

export type ScreenType = 'xl-desktop' | 'lg-desktop' | 'md-desktop' | 'sm-tablet' | 'xs-phone'
export type State = {
  type: ScreenType
}

const trackScreenType = () => {
  const width = window.innerWidth
  const type:ScreenType = width >= 1920? 'xl-desktop'
    : width >= 1280? 'lg-desktop'
    : width >= 960? 'md-desktop'
    : width >= 600? 'sm-tablet'
    : 'xs-phone'
  return type
}
const ScreenContext = React.createContext<{
  state: State,
  setState: (state:State) => void
}>({
  state: {
    type: trackScreenType()
  },
  setState: () => {}
})

export const Provider:React.FunctionComponent = props => {
  const [state, setState] = React.useState<State>({
    type: trackScreenType()
  })
  React.useEffect(() => {
    const listenScreenType = () => {
      const screenType = trackScreenType()
      if(state.type !== screenType) {
        setState({
          ...state,
          type: screenType
        })
      }
    }
    window.addEventListener('resize', listenScreenType)
    return () =>
      window.removeEventListener('resize', listenScreenType)
  }, [state.type])
  return (
    <ScreenContext.Provider value={{state, setState}}>
      {props.children}
    </ScreenContext.Provider>
  )
}
const useScreenContext = () => {
  const {state} = React.useContext(ScreenContext)
  return [state]
}

export default useScreenContext