import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import {useScreenState} from '../../store/screen'
import HonkaiImpact from '../../../asset/img/honkai-impact.png'
import Discord from '../../../asset/img/discord.png'

const useStyles = makeStyles((theme:Theme) => ({
  headerContainer: {
    position: 'relative',
    display: 'flex',
    transition: 'margin 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
  headerBlock: {
    width: '100vw',
    minHeight: '350px',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column-reverse'
    }
  },
  headerText: {
    textAlign: 'right',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      textAlign: 'center'
    }
  },
  headerTextFont: {
    fontFamily: 'Righteous',
    lineHeight: '0.8em',
    margin: '24px 0'
  },
  honkaiImpactImage: {
    display: 'inline-block',
    height: '80px',
    margin: '-34px 0',
    [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
      height: '50px',
      margin: '-21px 0',
    }
  },
  discordImage: {
    display: 'inline-block',
    height: '42px',
    margin: '-17px 0',
    [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
      height: '26px',
      margin: '-9px 0',
    }
  }
}))
const HeaderBlocks:React.FunctionComponent<HeaderBlocksProps> = (props) => {
  const [{type:screenType}] = useScreenState()

  const getPosition = () => {
    const {selected, characters} = props
    const index = characters.map(character => character.key).indexOf(selected)
    return (-index * 100) + '%'
  }
  
  const classes = useStyles({})
  const {characters} = props
  return (
    <div className={classes.headerContainer} style={{
      width: characters? `${characters.length * 100}vw`:undefined,
      marginLeft: getPosition()
    }}>
      {characters.map(character =>
        <div key={character.key} className={classes.headerBlock}>
          <img src={character.image.src} className={character.image.className}/>
          <div className={classes.headerText}>
            <Typography classes={{root:classes.headerTextFont}}
              variant={['sm-tablet', 'xs-phone'].includes(screenType)? 'h2':'h1'}
              style={{color:character.color.primary}}
            >
              <span style={{whiteSpace:'pre'}}>{character.name}</span>
            </Typography>
            <Typography classes={{root:classes.headerTextFont}}
              variant={['sm-tablet', 'xs-phone'].includes(screenType)? 'subtitle1':'h5'}
              style={{color:character.color.secondary}}
            >
              from <img className={classes.honkaiImpactImage} src={HonkaiImpact}/>
              comes to <img className={classes.discordImage} src={Discord}/>
            </Typography>
          </div>
        </div>
      )}
    </div>
  )
}
type HeaderBlocksProps = {
  selected: string
  characters: {
    key: string
    name: string
    image: {
      src: string
      className: string
    }
    color: {
      primary: string
      secondary: string
    }
  }[]
}

export default HeaderBlocks