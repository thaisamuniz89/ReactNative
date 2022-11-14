import React from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';


export default function App() {
 

    return(
      
      <View style={styles.container}>
          <StatusBar style="auto"/>
           <View style={styles.tira}></View>
           
           <View style={styles.container1}>
              <View style={styles.quadrado}></View>
              <View style={{backgroundColor: '#FFA500', width:'45%', height: 40, marginTop: 15}}></View>
           </View>
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={styles.container2}>
                  <View style={{backgroundColor: '#8A2BE2', width: '50%', height: 80}}></View>
                  <View style={{backgroundColor: '#6495ED', width: '50%', height: 80}}></View>
                </View>
                <View style={styles.tira}></View>
           </View>
            
           
           
          <View style={styles.containerQuadrado}>
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
          </View>          
          <View style={styles.containerQuadrado}>
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
              <View style={styles.quadrado}></View>
          </View>          

             
             <View style={{backgroundColor: '#6495ED', width: '100%', height: 80}}></View>
        </View>
      
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    
    },
    tira:{
      width:'100%',
      height: 15,
      backgroundColor: '#40E0D0'
    },
    container1:{
     flex:1, 
     flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
    
    
    },
    container2: {
      flexDirection:'row',
      width: '100%'
    },
    
    containerQuadrado: {
      flex: 0.7,
      flexWrap: 'wrap',
      alignContent: 'space-around',
      width: '100%', 
    },
  
    quadrado:{
      height:100 ,
      width:100,
      backgroundColor: '#FFA500'
    }
  
});


