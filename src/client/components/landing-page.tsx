import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import {grey, green, yellow, purple, orange} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import AiChanCharacter from '../../asset/img/character/ai-chan.png'
import AiChanAvatar from '../../asset/img/avatar/ai-chan.png'
import KianaCharacter from '../../asset/img/character/kiana.png'
import KianaAvatar from '../../asset/img/avatar/kiana.png'
import MeiCharacter from '../../asset/img/character/mei.png'
import MeiAvatar from '../../asset/img/avatar/mei.png'
import BronyaCharacter from '../../asset/img/character/bronya.png'
import BronyaAvatar from '../../asset/img/avatar/bronya.png'
import {useScreenState} from '../store/screen'
import AiChanPage from './pages/ai-chan'
import KianaPage from './pages/kiana'
import MeiPage from './pages/mei'
import BronyaPage from './pages/bronya'
import HeaderBlocks from './common/header-blocks'
import HeaderBackground from './common/header-background'
import AvatarButtons from './common/avatar-buttons'

const useStyles = makeStyles((theme:Theme) => ({
  '@import': [
    'url(https://fonts.googleapis.com/css?family=Righteous)',
    'url(https://fonts.googleapis.com/css?family=Roboto+Mono)'
  ] as any,
  container: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerContainer: {
    width: '100vw',
    position: 'relative',
    overflow: 'hidden'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    padding: '0 32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '0 16px',
    }
  },
  ...[{
    name: 'aiChan',
    width: 300,
    bottom: 73
  }, {
    name: 'kiana',
    width: 420,
    left: 50,
    bottom: 50
  }, {
    name: 'mei',
    width: 420,
    left: 80,
    bottom: 50
  }, {
    name: 'bronya',
    width: 420,
    left: 70,
    bottom: 50
  }].reduce((styles, character) => ({
    ...styles,
    [character.name + 'Welcome']: {
      width: `${character.width}px`,
      marginBottom: `-${character.bottom}px`,
      ...character.left? {
        marginLeft: `-${character.left}px`,
        [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
          marginLeft: '0',
        }
      }:{}
    }
  }), {
    aiChanWelcome: {},
    kianaWelcome: {},
    meiWelcome: {},
    bronyaWelcome: {}
  }),
  ...[{
    name: 'aiChan',
    color: green
  }, {
    name: 'kiana',
    color: yellow
  }, {
    name: 'mei',
    color: purple
  }, {
    name: 'bronya',
    color: orange
  }].reduce((styles, character) => ({
    ...styles,
    [character.name + 'Button']: {
      color: 'black',
      backgroundColor: character.color[100],
      '&:hover': {
        backgroundColor: character.color[200]
      }
    },
    [character.name + 'ButtonFocus']: {
      color: 'white',
      backgroundColor: character.color[800],
      '&:hover': {
        backgroundColor: character.color[900]
      }
    }
  }), {
    aiChanButton: {},
    aiChanButtonFocus: {},
    kianaButton: {},
    kianaButtonFocus: {},
    meiButton: {},
    meiButtonFocus: {},
    bronyaButton: {},
    bronyaButtonFocus: {}
  }),
  dividerButtons: {
    transform: 'translateY(-36px)'
  },
  views: {
    width: '100vw'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none'
  },
  footer: {
    width: '100vw',
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: grey[900]
  },
  footerText: {
    transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
}))
const LandingPage:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenState()
  const [state, setState] = React.useState<LandingPageState>({
    option: 'ai',
    color: 'black',
    updateHeight: undefined
  })

  React.useEffect(() => {
    document.querySelector('body').style.background = grey[800]
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const loadUpdateHeight = (updateHeight:() => void) => {
    setState({
      ...state,
      updateHeight
    })
  }
  const onScroll = () => {
    const body = document.querySelector('body')
    if(window.innerHeight + window.scrollY >= body.offsetHeight - 300) {
      state.updateHeight?.()
      window.removeEventListener('scroll', onScroll)
    }
  }
  const changeOption = (option:LandingPageState['option']) => {
    setState({
      ...state,
      option
    })
  }
  const switchView = (index:number) => {
    setState({
      ...state,
      option: ['ai' as const, 'kiana' as const, 'mei' as const, 'bronya' as const][index]
    })
  }
  const getForegroundColor = () => {
    const {option} = state
    switch(option) {
    case 'ai':
      return green[400]
    case 'kiana':
      return yellow[400]
    case 'mei':
      return purple[400]
    case 'bronya':
      return orange[400]
    }
  }
  const getBackgroundColor = () => {
    const {option} = state
    switch(option) {
    case 'ai':
      return {from:'#A5D6A7', to:'#E6EE9C'}
    case 'kiana':
      return {from:'#FFF59D', to:'#FFFF8D'}
    case 'mei':
      return {from:'#CE93D8', to:'#9FA8DA'}
    case 'bronya':
      return {from:'#FFE082', to:'#FFAB91'}
    }
  }

  const classes = useStyles({})
  const {option, updateHeight} = state
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <HeaderBackground color={getBackgroundColor()}/>
        <HeaderBlocks
          selected={option}
          characters={[{
            key: 'ai',
            name: 'Ai Chan',
            image: {src:AiChanCharacter, className:classes.aiChanWelcome},
            color: {primary:green[800], secondary:green[500]}
          }, {
            key: 'kiana',
            name: 'Kiana\nKaslana',
            image: {src:KianaCharacter, className:classes.kianaWelcome},
            color: {primary:yellow[800], secondary:yellow[600]}
          }, {
            key: 'mei',
            name: 'Raiden\nMei',
            image: {src:MeiCharacter, className:classes.meiWelcome},
            color: {primary:purple[800], secondary:purple[500]}
          }, {
            key: 'bronya',
            name: 'Bronya\nZaychik',
            image: {src:BronyaCharacter, className:classes.bronyaWelcome},
            color: {primary:orange[800], secondary:orange[500]}
          }]}
        />
      </div>
      <Grid container justify='center' classes={{container:classes.dividerButtons}}>
        <AvatarButtons selected={option} buttons={[{
          key: 'ai' as const,
          image: AiChanAvatar,
          color: {primary:classes.aiChanButtonFocus, secondary:classes.aiChanButton}
        }, {
          key: 'kiana' as const,
          image: KianaAvatar,
          color: {primary:classes.kianaButtonFocus, secondary:classes.kianaButton}
        }, {
          key: 'mei' as const,
          image: MeiAvatar,
          color: {primary:classes.meiButtonFocus, secondary:classes.meiButton}
        }, {
          key: 'bronya' as const,
          image: BronyaAvatar,
          color: {primary:classes.bronyaButtonFocus, secondary:classes.bronyaButton}
        }].map(character => ({
          ...character,
          onClick: () => changeOption(character.key)
        }))}/>
      </Grid>
      <SwipeableViews className={classes.views} animateHeight
        action={(hooks => loadUpdateHeight(hooks.updateHeight)) as any}
        index={['ai', 'kiana', 'mei', 'bronya'].indexOf(option)}
        onChangeIndex={switchView}
      >
        <AiChanPage updateHeight={updateHeight}/>
        <KianaPage updateHeight={updateHeight}/>
        <MeiPage updateHeight={updateHeight}/>
        <BronyaPage updateHeight={updateHeight}/>
      </SwipeableViews>
      <div className={classes.footer}>
        <Grid container justify='space-between' alignItems='center' classes={{container:classes.pageContainer}}>
          <Typography variant='caption' classes={{root:classes.footerText}} style={{color:getForegroundColor()}}>
            Developed by: Ching Yaw Hao, RaikireHiuduo, Lucatiel, Lil'Cookie
          </Typography>
          <Typography variant='caption' classes={{root:classes.footerText}} style={{color:getForegroundColor()}}>
            <a className={classes.link} href='https://discord.gg/cWbWNuy'>Try It</a> | <a className={classes.link} href='https://www.patreon.com/user?u=10662508'>Support Us</a> 
          </Typography>
        </Grid>
      </div>
    </div>
  )
}
interface LandingPageState {
  option: 'ai' | 'kiana' | 'mei' | 'bronya'
  color: string
  updateHeight?: () => void
}

export default LandingPage