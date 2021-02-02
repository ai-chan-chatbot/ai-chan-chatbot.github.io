import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import {green} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import generateHelps from '../../constants/ai-chan'
import DemoSection from './common/demo-section'
import CommandSection from './common/command-section'
import StigmataDemo from '../../../asset/img/stigmata-demo.png'
import ValkyrieDemo from '../../../asset/img/valkyrie-demo.png'
import RecommendationDemo from '../../../asset/img/recommendation-demo.png'
import ElfDemo from '../../../asset/img/elf-demo.png'
import GachaDemo from '../../../asset/img/gacha-demo.png'

const useStyles = makeStyles((theme:Theme) => ({
  '@import': [
    'url(https://fonts.googleapis.com/css?family=Righteous)',
    'url(https://fonts.googleapis.com/css?family=Roboto+Mono)'
  ] as any,
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    padding: '0 32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '0 16px',
    }
  },
  text: {
    color: 'white'
  },
  descriptionRow: {
    textAlign: 'center',
    padding: '16px 0'
  },
  inviteButtons: {
    textAlign: 'center',
    padding: '32px 0'
  },
  inviteButton: {
    margin: '8px',
    color: theme.palette.primary.contrastText,
    backgroundColor: green[800],
    '&:hover': {
      backgroundColor: green[900]
    }
  },
  link: {
    color: green[800],
    textDecoration: 'none'
  },
  dividerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  divider: {
    flexGrow: 1,
    margin: '16px'
  }
}))
const AiChanPage:React.FunctionComponent<AiChanPageProps> = (props) => {
  const classes = useStyles({})
  const {updateHeight} = props
  return (
    <div className={classes.container}>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container justify='center' classes={{container:classes.descriptionRow}}>
          <Typography variant='body1' classes={{root:classes.text}}>
            Ai Chan is our general purpose bot designed to provide information of in game equipments to discord.
          </Typography>
          <Typography variant='body1' classes={{root:classes.text}}>
            If you are a Genshin Impact traveler, check out our{' '}
            <a className={classes.link} href='https://paimon-chatbot.github.io'>Paimon</a> too.
          </Typography>
        </Grid>
        <Grid container justify='center' classes={{container:classes.inviteButtons}}>
          <Button classes={{root:classes.inviteButton}} variant='contained' size='large'
            href='https://discordapp.com/oauth2/authorize?client_id=434737143395516416&permissions=8&scope=bot'
          >
            INVITE ME
          </Button>
          <Button classes={{root:classes.inviteButton}} variant='contained' size='large'
            href='https://www.patreon.com/user?u=10662508'
          >
            SUPPORT US
          </Button>
        </Grid>
        <Grid container classes={{container:classes.dividerRow}}>
          <Divider classes={{root:classes.divider}}/>
          <Typography variant='h5' classes={{root:classes.text}}>
            FEATURES
          </Typography>
          <Divider classes={{root:classes.divider}}/>
        </Grid>
        <DemoSection
          demos={[{
            headline: 'Show & Describe Game Equipment',
            command: 'command: !weapon, !stigmata',
            description: [
              'You don\'t need to take screenshot and upload it to show info about game equipment.',
              'AI Chan will display it for you.'
            ],
            image: StigmataDemo
          }, {
            headline: 'Show & Describe Valkyrie',
            command: 'command: !valkyrie',
            description: [
              'Here is the secret about the gals!',
              'But however hard you try you will not be able to see their panties!'
            ],
            image: ValkyrieDemo
          }, {
            headline: 'Recommend Equipments',
            command: 'command: !recommend',
            description: [
              'You can see better set equipment for the valkyrie too...'
            ],
            image: RecommendationDemo
          }, {
            headline: 'Show & Describe ELF',
            command: 'command: !elf',
            description: [
              'ELF Equipment Living Form is here too...'
            ],
            image: ElfDemo
          }, {
            headline: 'Gacha Simulation',
            command: 'command: !gacha',
            description: [
              'Yeah, AI Chan know you are really like gacha system in Honkai Impact 3rd so I bring a simulation to your server to enhance your luck. (maybe)'
            ],
            image: GachaDemo
          }]}
          color={green[400]}
        />
        <Grid container classes={{container:classes.dividerRow}}>
          <Divider classes={{root:classes.divider}}/>
          <Typography variant='h5' classes={{root:classes.text}}>
            COMMANDS
          </Typography>
          <Divider classes={{root:classes.divider}}/>
        </Grid>
        <CommandSection
          name={'Ai Chan'}
          helps={generateHelps(PREFIX)}
          color={green[300]}
          updateHeight={updateHeight}
        />
      </Grid>
    </div>
  )
}
type AiChanPageProps = {
  updateHeight?: () => void
}

export default AiChanPage