import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import {yellow} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import generateHelps from '../../constants/kiana'
import DemoSection from './common/demo-section'
import CommandSection from './common/command-section'
import HonkaiUpdateDemo from '../../../asset/img/honkai-update-demo.png'

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
    flexDirection: 'column',
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
    backgroundColor: yellow[800],
    '&:hover': {
      backgroundColor: yellow[900]
    }
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
const KianaPage:React.FunctionComponent<KianaPageProps> = (props) => {
  const classes = useStyles({})
  const {updateHeight} = props
  return (
    <div className={classes.container}>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container justify='center' classes={{container:classes.descriptionRow}}>
          <Typography variant='body1' classes={{root:classes.text}}>
            Kiana is a valkyrie chatbot that are reserved for our patreon supporter.
          </Typography>
          <Typography variant='body1' classes={{root:classes.text}}>
            If you want to chat with Kiana, just tag her.
          </Typography>
        </Grid>
        <Grid container justify='center' classes={{container:classes.inviteButtons}}>
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
            headline: 'Updates You of Game Changes',
            description: [
              `Kiana gathers information from the official Honkai Impact social media and update you.`
            ],
            image: HonkaiUpdateDemo
          }]}
          color={yellow[400]}
        />
        <Grid container classes={{container:classes.dividerRow}}>
          <Divider classes={{root:classes.divider}}/>
          <Typography variant='h5' classes={{root:classes.text}}>
            COMMANDS
          </Typography>
          <Divider classes={{root:classes.divider}}/>
        </Grid>
        <CommandSection
          name={'Kiana'}
          helps={generateHelps(PREFIX)}
          color={yellow[300]}
          updateHeight={updateHeight}
        />
      </Grid>
    </div>
  )
}
type KianaPageProps = {
  updateHeight?: () => void
}

export default KianaPage