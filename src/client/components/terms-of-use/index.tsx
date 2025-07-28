import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import {green, grey} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import useScreenContext from '../../store/screen'

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
    padding: '32px 0',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerTextFont: {
    fontFamily: 'Righteous',
    lineHeight: '0.8em',
    margin: '24px 0'
  },
  pageContainer: {
    width: '1200px',
    maxWidth: '100%',
    padding: '0 32px',
    [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
      padding: '0 16px',
    }
  },
  contentContainer: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gap: '8px',
    padding: '32px 0'
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
  },
  text: {
    color: 'white',
    '& a': {
      color: green[500],
      textDecoration: 'none'
    }
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
const TermsOfUse:React.FunctionComponent = () => {
  const [{type:screenType}] = useScreenContext()

  React.useEffect(() => {
    document.querySelector('body').style.background = grey[800]
  }, [])

  const classes = useStyles({})
  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}
        style={{background: `linear-gradient(to top right, #A5D6A7, #E6EE9C)`}}
      >
        <Grid container classes={{container:classes.pageContainer}}>
          <Typography classes={{root:classes.headerTextFont}}
            variant={['sm-tablet', 'xs-phone'].includes(screenType)? 'h3':'h2'}
            style={{color:green[800]}}
          >
            <span style={{whiteSpace:'pre'}}>Terms of Use</span>
          </Typography>
        </Grid>
      </div>
      <Grid container classes={{container:classes.pageContainer}}>
        <div style={{margin:'32px 0'}}>
          <Typography variant='body1' gutterBottom
            style={{color:green[500]}}
          >
            Effective Date: 2025-07-28
          </Typography>
          <Typography variant='body1' classes={{root:classes.text}}>
            Welcome to Ai Chan, a free community chatbot designed to provide Honkai Impact in-game information on Discord. By using Ai Chan, you agree to the following Terms of Service (“Terms”). Please read them carefully.
          </Typography>
        </div>
        <Grid container classes={{container:classes.dividerRow}}>
          <Divider classes={{root:classes.divider}}/>
        </Grid>
        <div className={classes.contentContainer}>
          {[{
            title: 'Acceptance of Terms',
            content: (
              <Typography variant='body1' classes={{root:classes.text}}>
                By adding Ai Chan to your Discord server or interacting with it, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, you may not use Ai Chan.
              </Typography>
            )
          }, {
            title: 'Service Description',
            content: (
              <>
                <Typography variant='body1' classes={{root:classes.text}}>
                  Ai Chan is a free, community-maintained chatbot that provides information related to Honkai Impact 3rd, such as:
                </Typography>
                <Typography variant='body1' component='ul' classes={{root:classes.text}}
                  style={{margin: '8px 0', paddingLeft:'24px'}}
                >
                  <li>In-game character information and statistics</li>
                  <li>In-game item information and statistics</li>
                  <li>Event schedules and announcements</li>
                  <li>General gameplay information</li>
                </Typography>
                <Typography variant='body1' classes={{root:classes.text}}>
                  Ai Chan is not affiliated with, endorsed by, or associated with miHoYo/HoYoverse or Discord.
                </Typography>
              </>
            )
          }, {
            title: 'User Eligibility',
            content: (
              <Typography variant='body1' component='ul' classes={{root:classes.text}}
                style={{paddingLeft:'24px'}}
              >
                <li>You must comply with Discord's <a href='https://discord.com/terms'>Terms of Service</a> and <a href='https://discord.com/guidelines'>Community Guidelines</a>.</li>
                <li>Ai Chan is intended for users aged 13+, or older if required by local law.</li>
              </Typography>
            )
          }, {
            title: 'Use Restrictions',
            content: (
              <>
                <Typography variant='body1' classes={{root:classes.text}}>
                  You agree not to:
                </Typography>
                <Typography variant='body1' component='ul' classes={{root:classes.text}}
                  style={{margin: '8px 0', paddingLeft:'24px'}}
                >
                  <li>Use Ai Chan for harassment, spamming, or abusive behavior.</li>
                  <li>Modify, distribute, or exploit Ai Chan’s code or responses without permission.</li>
                  <li>Use Ai Chan for illegal or malicious purposes.</li>
                </Typography>
              </>
            )
          }, {
            title: 'Data Collection & Privacy',
            content: (
              <>
                <Typography variant='body1' classes={{root:classes.text}}>
                  Ai Chan may temporarily process Discord usernames, IDs, and message content to function correctly.
                </Typography>
                <Typography variant='body1' component='ul' classes={{root:classes.text}}
                  style={{margin: '8px 0', paddingLeft:'24px'}}
                >
                  <li>Ai Chan does not store personal data beyond what is required for immediate responses.</li>
                  <li>No data is sold or shared with third parties.</li>
                </Typography>
              </>
            )
          }, {
            title: 'Disclaimer of Warranty',
            content: (
              <>
                <Typography variant='body1' classes={{root:classes.text}}>
                  Ai Chan is provided “as-is” and “as-available”.
                </Typography>
                <Typography variant='body1' component='ul' classes={{root:classes.text}}
                  style={{margin: '8px 0', paddingLeft:'24px'}}
                >
                  <li>We do not guarantee accuracy, uptime, or error-free operation.</li>
                  <li>In-game information is subject to change and may be inaccurate or outdated.</li>
                </Typography>
              </>
            )
          }, {
            title: 'Limitation of Liability',
            content: (
              <>
                <Typography variant='body1' classes={{root:classes.text}}>
                  To the maximum extent permitted by law:
                </Typography>
                <Typography variant='body1' component='ul' classes={{root:classes.text}}
                  style={{margin: '8px 0', paddingLeft:'24px'}}
                >
                  <li>We are not liable for any losses, damages, or issues caused by using Ai Chan.</li>
                  <li>Use Ai Chan at your own risk.</li>
                </Typography>
              </>
            )
          }, {
            title: 'Changes to the Service',
            content: (
              <>
                <Typography variant='body1' classes={{root:classes.text}}>
                  We reserve the right to:
                </Typography>
                <Typography variant='body1' component='ul' classes={{root:classes.text}}
                  style={{margin: '8px 0', paddingLeft:'24px'}}
                >
                  <li>Update or discontinue Ai Chan at any time without notice.</li>
                  <li>Modify these Terms, with updates announced in Ai Chan’s support server.</li>
                </Typography>
              </>
            )
          }, {
            title: 'Termination',
            content: (
              <Typography variant='body1' classes={{root:classes.text}}>
                We may suspend or remove Ai Chan from servers at our discretion if these Terms are violated or if required by law.
              </Typography>
            )
          }, {
            title: 'Contact',
            content: (
              <>
                <Typography variant='body1' classes={{root:classes.text}}>
                  For questions or support, contact:
                </Typography>
                <Typography variant='body1' component='ul' classes={{root:classes.text}}
                  style={{margin: '8px 0', paddingLeft:'24px'}}
                >
                  <li>Support Discord Server: <a href='https://discord.gg/cWbWNuy'>https://discord.gg/cWbWNuy</a></li>
                </Typography>
              </>
            )
          }, {
            title: 'Intellectual Property',
            content: (
              <Typography variant='body1' component='ul' classes={{root:classes.text}}
                style={{paddingLeft:'24px'}}
              >
                <li>Ai Chan is a fan-made project.</li>
                <li>All Honkai Impact game assets, names, and trademarks belong to miHoYo/HoYoverse.</li>
                <li>We make no claim of ownership over these assets.</li>
              </Typography>
            )
          }].map((section, index) => (
            <React.Fragment key={section.title}>
              <div>
                <Typography variant='h5' style={{color:green[500]}}>
                  {index + 1}.
                </Typography>
              </div>
              <div>
                <Typography variant='h5' style={{color:green[500]}}>
                  {section.title}
                </Typography>
              </div>
              <div/>
              <div style={{marginBottom:'16px'}}>
                {section.content}
              </div>
            </React.Fragment>
          ))}
        </div>
      </Grid>
      <div className={classes.footer}>
        <Grid container justify='space-between' alignItems='center' classes={{container:classes.pageContainer}}>
          <Typography variant='caption' classes={{root:classes.footerText}} style={{color:'white'}}>
            Developed by: Ching Yaw Hao, RaikireHiuduo, Lucatiel, Lil'Cookie
          </Typography>
        </Grid>
      </div>
    </div>
  )
}

export default TermsOfUse
