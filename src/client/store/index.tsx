import * as React from 'react'
import {Provider as ScreenProvider} from './screen'

const CombinedContextProvider:React.FunctionComponent = props => {
  return [
    ScreenProvider
  ].reduce<JSX.Element>((combined, Provider) =>
    <Provider>
      {combined}
    </Provider>,
    <>
      {props.children}
    </>
  )
}
export default CombinedContextProvider