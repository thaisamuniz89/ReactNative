import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {  FontAwesome5, AntDesign, EvilIcons, Ionicons ,
        FontAwesome, Feather,Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


export default function App() {
  const[isTrue, setIsTrue] = useState(false)

  const handlePress = () =>{
    setIsTrue(!isTrue)
  }
  return (
    <View style={{flex: 1}}>
    <ScrollView style={styles.container}>
    
      
      <View style={styles.container2}>
        <View style={styles.conta}>
          <View style={styles.barraUsuario}>
            <FontAwesome5 name="user-alt" size={18} color="#DCDCDC" style={{backgroundColor: '#ffff', borderRadius: 50, padding:7}} />
            <Text style={styles.texto}>Thaísa</Text>
            <AntDesign name="down" size={13} color="white" style={{marginTop:10}} />
          </View>
          <View style={styles.alert}>
            <EvilIcons name="search" size={30} color="white" style={{padding:2, marginEnd:8}}/>
            <FontAwesome name="bell-o" size={18} color="white" style={{padding:4, marginEnd:5}} />
          </View>
        
        
        </View>
          <Feather onPress={handlePress} name={ isTrue? "eye": "eye-off"} size={22} color="white"><Text style={styles.texto}>   saldo em conta</Text></Feather>
         
         
          <Text style={{fontSize:30, color: 'white', fontWeight: 'bold'}}>R$ {isTrue? <><Entypo name="dot-single" size={35} color="white"  />
            <Entypo name="dot-single" size={35} color="white" />
            <Entypo name="dot-single" size={35} color="white" />
            <Entypo name="dot-single" size={35} color="white" /> </>: "5.100,59" }
          </Text>
          <View style={{backgroundColor:'white', width:'90%', height:1}}></View>
          <Text style={styles.texto}>limite da conta disponível R$ {isTrue? <><Entypo name="dot-single" size={15} color="white"  />
            <Entypo name="dot-single" size={15} color="white" />
            <Entypo name="dot-single" size={15} color="white" />
            <Entypo name="dot-single" size={15} color="white" /> </>: "20.100,59" }
          </Text>
      </View>
      <View style={styles.container3}>
        <View style={styles.menu}>
          <FontAwesome5 name="link" size={25} color="white" style={{backgroundColor: '#136CAE', padding:15, borderRadius:10, borderColor: 'lightgrey', borderWidth: 1}} />
          <Text style={{color:'#363636', fontSize: 15, marginTop:8}}>open finance</Text>
        </View>
        <View style={styles.menu}>
        <AntDesign name="appstore1" size={25} color="#FF8C00" style={{ padding:15, borderRadius:10, borderColor: 'lightgrey', borderWidth: 1}} />
          <Text style={{color:'#363636', fontSize: 15, marginTop:8}}>Pix</Text>
        </View>
        <View style={styles.menu}>
         
          <FontAwesome5 name="barcode" size={25} color="#FF8C00" style={{ padding:15, borderRadius:10, borderColor: 'lightgrey', borderWidth: 1}} />
          <Text style={{color:'#363636', fontSize: 15, marginTop:8}}>pagar conta</Text>
        </View>
        <View style={styles.menu}>
         
        <AntDesign name="swap" size={25} color="#FF8C00" style={{ padding:15, borderRadius:10, borderColor: 'lightgrey', borderWidth: 1}} />
          <Text style={{color:'#363636', fontSize: 15, marginTop:8}}>transferir</Text>
        </View>
      </View>




      <View style={styles.container4}>




        <View style={styles.cards}>
          <View>
            <View style={styles.cardsHeader}>
              <Text style={{color:"dark", fontWeight: 'bold',fontSize:17, fontFamily: 'sans-serif'}}>Itau Uniclass Visa</Text>
              <Text style={styles.texto2}> expandir <AntDesign name="down" size={13} color="#363636" style={{marginTop:10}} /></Text>
            </View>
            <View style={styles.cardsCredit}>
              <Image source={require('./src/assets/visa.png')} style={{width:50, height:20, padding:2}} ></Image>
              <Text style={styles.texto2}>   final 8996</Text>
            </View>
          </View>
          <View>
            <View style={{backgroundColor:'#DCDCDC', width:'90%', height:1}}></View>
            <View style={styles.cardsBottom}>
              <Text style={styles.texto3}>ver fatura</Text>
              <Text style={styles.texto3}>cartão virtual</Text>
            </View>
          </View>
        </View>



        <View style={styles.cards}>
          <View>
            <View style={styles.cardsHeader}>
              <View>
              <Text style={{color:"dark", fontSize:30, fontFamily: 'sans-serif-thin'}}>organize</Text>
              <Text style={{color:"dark",fontSize:30, fontFamily: 'sans-serif-thin'}}>suas finanças</Text>
              </View>
              <Text style={styles.texto2}> expandir <AntDesign name="down" size={13} color="#363636" style={{marginTop:10}} /></Text>
            </View>
          
          </View>
          <View>
            <View style={{backgroundColor:'#DCDCDC', width:'90%', height:1}}></View>
            <View style={styles.cardsBottom}>
              <Text style={styles.texto3}>ver contratos</Text>
            </View>
          </View>
        </View>


        
        
        <View style={styles.cards}>
          <View>
            <View style={styles.cardsHeader}>
              
              <Text style={{color:"dark", fontSize:30, fontFamily: 'sans-serif-thin'}}>empréstimo</Text>
              <Text style={styles.texto2}> expandir <AntDesign name="down" size={13} color="#363636" style={{marginTop:10}} /></Text>
            </View>
          
          </View>
          <View>
            <View style={{backgroundColor:'#DCDCDC', width:'90%', height:1}}></View>
            <View style={styles.cardsBottom}>
              <Text style={styles.texto3}>ver mais</Text>
            </View>
          </View>
        </View>

        <View style={styles.cards}>
          <View>
            <View style={styles.cardsHeader}>
              <View>
              <Text style={{color:"dark", fontSize:30, fontFamily: 'sans-serif-thin'}}>meus</Text>
              <Text style={{color:"dark", fontSize:30, fontFamily: 'sans-serif-thin'}}>investimentos</Text>
              </View>
              <Text style={styles.texto2}> expandir <AntDesign name="down" size={13} color="#363636" style={{marginTop:10}} /></Text>
            </View>
          
          </View>
          <View>
            <View style={{backgroundColor:'#DCDCDC', width:'90%', height:1}}></View>
            <View style={styles.cardsBottom}>
              <Text style={styles.texto3}>ver detalhes</Text>
            </View>
          </View>
        </View>

        <View style={styles.cards}>
          <View>
            <View style={styles.cardsHeader}>
              
              <Text style={{color:"dark", fontSize:30, fontFamily: 'sans-serif-thin'}}>seguros</Text>
              <Text style={styles.texto2}> expandir <AntDesign name="down" size={13} color="#363636" style={{marginTop:10}} /></Text>
            </View>
          
          </View>
          <View>
            <View style={{backgroundColor:'#DCDCDC', width:'90%', height:1}}></View>
            <View style={styles.cardsBottom}>
              <Text style={styles.texto3}>ver mais</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.cards}>
          <View>
            <View style={styles.cardsHeader}>
              <View>
              <Text style={{color:"dark", fontSize:30, fontFamily: 'sans-serif-thin'}}>Jessica Torres</Text>
              <Text style={styles.texto2}>gerente Itaú Uniclass</Text>
              </View>
              <FontAwesome5 name="user-alt" size={30} color="#757575" style={{backgroundColor: '#ffff', borderRadius: 50, padding:15, borderWidth:4, borderColor: '#757575'}} />
            </View>
          
          </View>
          <View>
            <View style={{backgroundColor:'#DCDCDC', width:'90%', height:1}}></View>
            <View style={styles.cardsBottom}>
              <Text style={styles.texto3}>ligar</Text>
              <Text style={styles.texto3}>chat</Text>
              <Text style={styles.texto3}>e-mail</Text>
              <Text style={styles.texto3}>WhatsApp</Text>
            </View>
          </View>
        </View>
        
        
      </View>
      
    
    </ScrollView>
      
      <View style={styles.footer}>
        <View style={styles.menu}>
          <AntDesign name="home" size={24} color="white" style={{backgroundColor: '#FF8C00', padding:13, borderRadius:10}} />
        </View>
        <View style={styles.menu}>
          <MaterialCommunityIcons name="format-list-checkbox" size={28} color="#FF8C00" style={{ marginTop:5}}/>
          <Text style={{color:'#363636', fontSize: 15, marginTop:0}}>extrato</Text>
        </View>
        <View style={styles.menu}>
          <MaterialIcons name="attach-money" size={28}  color="#FF8C00" style={{ marginTop:5}}/>
          <Text style={{color:'#363636', fontSize: 15, marginTop:0}}>transações</Text>
        </View>
        <View style={styles.menu}> 
        <MaterialCommunityIcons name="grid" size={28} color="#FF8C00" style={{ marginTop:5}}/>
          <Text style={{color:'#363636', fontSize: 15, marginTop:0}}>produtos</Text>
        </View>
        <View style={styles.menu}> 
        <Ionicons name="ios-chatbubbles-outline" size={28} color="#FF8C00" style={{ marginTop:5}}/>
          <Text style={{color:'#363636', fontSize: 15, marginTop:0}}>ajuda</Text>
        </View>
      </View>
      
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'flex-start'
  },
  container2: {
    
    flexDirection: 'column',
    backgroundColor: '#757575',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: 15,
    height:250
  },
  conta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: ' #757575',
    color: '#ffffff',
    width: '100%',
    marginTop: 30

  },
  barraUsuario: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    backgroundColor: '#757575'
  },
  alert: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    backgroundColor: ' #757575'
  },
  texto: {
    color: '#ffff',
    fontSize: 15,
    padding: 6,
    fontStyle: 'bold',
    fontFamily:'sans-serif'

  },
  texto2: {
    color: "#757575",
    fontSize: 17,
    fontStyle: 'bold',
    fontFamily:'Roboto',
    marginLeft:4

  },
  texto3: {
    color: '#136CAE',
    fontSize: 19,
    fontStyle: 'bold',
    fontFamily:'sans-serif',
    marginRight:30

  },
  container3: {
   
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:15,
    padding:15,
    height: 130
   
  },
  footer: {

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    padding:10,
    height: 90,
    borderTopColor: '#DCDCDC',
    borderTopWidth: 1
  },
  menu: {
    flexDirection: 'column',
    alignItems: 'center', 
  },
  container4:{
    backgroundColor:"#DCDCDC",
    alignItems: 'center',
    padding:15
  },
  cards: {
    backgroundColor: "white",
    width: '100%',
    height: 200,
    justifyContent:'space-between',
    
    borderRadius: 10,
    padding:15,
    marginTop:16,
    
    shadowColor: '#171717',
    shadowOffset: {width: -5, height: 4},
    shadowOpacity: 1,
  },
  cardsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "white",
    width: '100%',
    padding: 10
    },
  cardsBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: "white",
    padding: 10,
    color: '#136CAE'
    },
  cardsCredit: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap:10,
    backgroundColor: "white",
    //width: '100%',
    padding: 10,
    color: '#136CAE'
    },

});
