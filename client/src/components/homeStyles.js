import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  
  headContainer:{
    display:'flex',
    flex:1

  },
  leftContainer:{
    flex:0.5,
    marginTop:80
  },
  leftText:{
    fontSize:70,
    fontFamily: 'Raleway',paddingLeft:12

  },
  leftText2:{
    fontSize:70,
    fontFamily: 'Raleway',


  },
  registerLink:{
    textDecoration:'none',
    color:'#ffffff',
    backgroundColor:'#00AFF0',
    padding:20,
    paddingLeft:50,
    paddingRight:50,
    fontSize:30,
    fontFamily:'Raleway',
    borderRadius:70,
    
  },
  registerLinkBox:{
    marginTop:40,
  },

  rightContainer:{
    flex:0.5,
    width:'30%',
    marginTop:90,
    marginLeft:10
    // marginRight:-180


  },
  listContainer:{
    marginTop:5,
    marginBottom:5

  },
  reportButton:{
      backgroundColor:"#3b5998",
      color:"#ffffff"

  },
  subReport: {
    flexDirection: "row",
    color: "#000000",
  },
  slider:{
    objectFit:'cover'

  }

}));
