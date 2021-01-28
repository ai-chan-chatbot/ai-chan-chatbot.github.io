import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import {TransitionGroup, Transition} from 'react-transition-group'
import {TransitionStatus} from 'react-transition-group/Transition'

const duration = 1500
const BackgroundRipple:React.FunctionComponent<BackgroundRippleProps> = (props) => {
  const {animate, appear, key, size, color} = props
  const defaultStyle:React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
    top: `calc(100% - ${size} / 2)`,
    left: `calc(50% - ${size} / 2)`,
    background: `linear-gradient(to top right, ${color.from}, ${color.to})`
  }
  const transitionStyles:Partial<Record<TransitionStatus, React.CSSProperties>> = {
    entering: {
      transform: 'scale(0, 0)',
      borderRadius: '50%'
    },
    entered: {
      transform: 'scale(1, 1)',
      borderRadius: '50%',
      transition: ['transform'].map(property => `${property} ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`).join(', ')
    },
    exiting: {
      opacity: 1
    },
    exited: {
      transform: 'scale(0, 0)',
      opacity: 0,
      transition: ['transform'].map(property => `${property} 0ms ${duration}ms`).join(', ')
    }
  }
  return (
    animate?
    <Transition in={appear} timeout={100} unmountOnExit>
      {state => (
        <div key={key} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}/>
      )}
    </Transition> :
    <div key={key} style={defaultStyle}/>
  )
}
type BackgroundRippleProps = {
  key: number
  appear: boolean
  size: string
  color: {
    from: string
    to: string
  }
  animate?: boolean
}

const useBackgroundStyles = makeStyles((theme:Theme) => ({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0
  }
}))
let container:HTMLDivElement
const HeaderBackground:React.FunctionComponent<HeaderBackgroundProps> = (props) => {
  const {from, to} = props.color
  const [state, setState] = React.useState<HeaderBackgroundState>({
    key: 0,
    ripples: [{
      key: 0,
      appear: true,
      size: '200%',
      color: {from, to}
    }]
  })

  React.useEffect(() => {
    const {from, to} = props.color
    changeColor(from, to)
  }, [props.color])

  const changeColor = (from:string, to:string) => {
    const {ripples} = state
    const hypotenuse = Math.sqrt(Math.pow(container.clientHeight, 2) + Math.pow(container.clientWidth, 2))
    const size = hypotenuse * 2
    setState(state => ({
      key: state.key + 1,
      ripples: [
        ...ripples, {
        key: state.key + 1,
        appear: true,
        animate: true,
        size: size + 'px',
        color: {from, to}
      }]
    }))
    const pastRipples = ripples.map(ripple => ripple.key)
    setTimeout(() =>
      setState(state => ({
        key: state.key,
        ripples: state.ripples.filter(ripple =>
          !pastRipples.includes(ripple.key)
        )
      }))
    , duration)
  }
  
  const classes = useBackgroundStyles({})
  const {ripples} = state
  return (
    <TransitionGroup ref={ref => container = ReactDOM.findDOMNode(ref) as HTMLDivElement} className={classes.container}>
      {ripples.map(ripple =>
        <BackgroundRipple {...ripple}/>
      )}
    </TransitionGroup>
  )
}
type HeaderBackgroundProps = {
  color: {
    from: string
    to: string
  }
}
type HeaderBackgroundState = {
  key: number
  ripples: {
    key: number
    appear: boolean
    size: string
    color: {
      from: string
      to: string
    }
  }[]
}

export default HeaderBackground