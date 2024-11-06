import { createUseStyles } from 'react-jss';

export const useFiveDaysStyles = createUseStyles({
  content: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    margin: 15,
    padding: [5, 15],
    border: '1px solid lightgrey',
    borderRadius: 4,
    cursor: 'pointer',
    
  },
  selected: {
    boxShadow: '0px 0px 20px 2px'
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 500
  }
})
export const useContentStyles = createUseStyles({
  mainContent: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  desc: {
    fontSize: 30,
    fontWeight: 600,
  },
  weatherNowContent: {},
  cityName: {
    fontSize: 30,
    fontWeight: 600,
  },
  temp: {
    fontSize: 30,
    fontWeight: 600,
  },
  icon: {
    '& img': {
      height: 80
    }
  },
  weatherByhours: {},
  hourItem: {
    fontSize: 16,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    fontWeight: 500,
    width: '100%',
    minWidth: 300,
    borderBottom: '1px solid grey'
  },
})

