import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import {orange} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'

import helps from '../../constants/bronya-helps'
import DemoSection from './common/demo-section'
import CommandSection from './common/command-section'
import UpdateDemo from '../../../asset/img/update-demo.png'

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
    backgroundColor: orange[800],
    '&:hover': {
      backgroundColor: orange[900]
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
const BronyaPage = (props:BronyaPageProps) => {
  const classes = useStyles({})
  const {updateHeight} = props
  return (
    <div className={classes.container}>
      <Grid container direction='column' alignItems='center' classes={{container:classes.pageContainer}}>
        <Grid container justify='center' classes={{container:classes.descriptionRow}}>
          <Typography variant='body1' classes={{root:classes.text}}>
            Bronya is a valkyrie chatbot that are reserved for our patreon supporter.
          </Typography>
          <Typography variant='body1' classes={{root:classes.text}}>
            If you want to chat with Bronya, just tag her.
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
              `Bronya takes information gathered from the official Honkai Impact Facebook page and update you.`
            ],
            image: UpdateDemo
          }]}
          color={orange[400]}
        />
        <Grid container classes={{container:classes.dividerRow}}>
          <Divider classes={{root:classes.divider}}/>
          <Typography variant='h5' classes={{root:classes.text}}>
            COMMANDS
          </Typography>
          <Divider classes={{root:classes.divider}}/>
        </Grid>
        <CommandSection
          name={'Bronya'}
          helps={helps(PREFIX)}
          color={orange[300]}
          updateHeight={updateHeight}
        />
      </Grid>
    </div>
  )
}
interface BronyaPageProps {
  updateHeight?: () => void
}

export default BronyaPage