import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Theme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme:Theme) => ({
  avatarButtons: {
    display: 'flex',
    justifyContent: 'center',
    transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  avatarButtonContainer: {
    padding: '8px',
    transition: 'padding 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  avatarButtonContainerActive: {
    padding: '8px 28px'
  },
  avatarButton: {
    width: '56px',
    minWidth: '56px',
    height: '56px',
    padding: '0',
    borderRadius: '28px',
    transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  avatarButtonActive: {
    transform: 'scale(1.5)'
  },
  avatarButtonIcon: {
    maxWidth: '90%',
    maxHeight: '90%'
  }
}))
const AvatarButtons = (props:AvatarButtonsProps) => {
  const getPosition = () => {
    const {selected, buttons} = props
    const index = buttons.map(button => button.key).indexOf(selected)
    if(index >= 0) {
      const position = (buttons.length - 1) / 2 - index
      return position * 72
    } else {
      return 0
    }
  }
  
  const classes = useStyles({})
  const {selected, buttons} = props
  return (
    <div className={classes.avatarButtons} style={{transform:`translateX(${getPosition()}px)`}}>
      {buttons.map(button =>
        <div key={button.key} className={[classes.avatarButtonContainer, selected === button.key? classes.avatarButtonContainerActive:''].join(' ')}>
          <Button onClick={button.onClick}
            classes={{
              root: [
                classes.avatarButton,
                selected === button.key? classes.avatarButtonActive:'',
                selected === button.key? button.color.primary:button.color.secondary
              ].join(' ')
            }}
          >
            <img className={classes.avatarButtonIcon} src={button.image}/>
          </Button>
        </div>
      )}
    </div>
  )
}
interface AvatarButtonsProps {
  selected: string
  buttons: {
    key: string
    image: string
    color: {
      primary: string
      secondary: string
    }
    onClick: () => void
  }[]
}

export default AvatarButtons