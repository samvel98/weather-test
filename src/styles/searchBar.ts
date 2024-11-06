import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  unknownCity: {
    display: 'flex',
    fontSize: 100
  },
  searchBarContainer: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: "#4a148c",
    padding: "10px",
  },
  searchInputContainer: {
    display: 'flex'
  },
  searchInput: {
    // width: "100%",
    padding: "5px",
    fontSize: "16px",
    marginRight: "10px",
    border: "none",
    outline: "none",
  },
  searchButton: {
    padding: "5px 10px",
    backgroundColor: "#ffffff",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  
  toggleSwitch: {
    position: "relative",
    width: 75,
    display: "inline-block",
    verticalAlign: "middle",
    webkitUserSelect: "none",
    mozUserSelect: "none",
    msUserSelect: "none",
    textAlign: "left"
  },
  toggleSwitchCheckbox: {
    display: "none",
    '&:checked + $toggleSwitchLabel $toggleSwitchInner': {
      marginLeft: "0"
    },
    '&:checked + $toggleSwitchLabel $toggleSwitchSwitch': {
      right: 0
    }
  },
  toggleSwitchLabel: {
    display: "block",
    overflow: "hidden",
    cursor: "pointer",
    border: "0 solid #bbb",
    borderRadius: 20,
    margin: "0"
  },
  toggleSwitchInner: {
    display: "block",
    width: "200%",
    marginLeft: "-100%",
    transition: "margin 0.3s ease-in 0s",
    '&:before, &:after': {
      display: "block",
      float: "left",
      width: "50%",
      height: "34px",
      padding: "0",
      lineHeight: "34px",
      fontSize: "14px",
      color: "white",
      fontWeight: "bold",
      boxSizing: "border-box"
    },
    '&:before': {
      content: "\"°C\"",
      textTransform: "uppercase",
      paddingLeft: "10px",
      backgroundColor: "#f90",
      color: "#fff"
    },
    '&:after': {
      content: "\"F\"",
      textTransform: "uppercase",
      paddingRight: "10px",
      backgroundColor: "#bbb",
      color: "#fff",
      textAlign: "right"
    }
  },
  

  toggleSwitchSwitch: {
    display: "block",
    width: "24px",
    margin: "5px",
    background: "#fff",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "40px",
    border: "0 solid #bbb",
    borderRadius: "20px",
    transition: "all 0.3s ease-in 0s"
  },
})