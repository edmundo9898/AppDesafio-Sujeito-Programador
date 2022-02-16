import React, { Component } from 'react'
import { StyleSheet, Text, View, Switch, TextInput,
TouchableOpacity } from 'react-native';


import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';




export default class  App extends Component {

    constructor(props){
      super(props);
      this.state = {
        nome: '',
        idade:'',
        sexo: 0, 
        sexos:[
          {
            key: 1, sexo: 'Selecione'
          },
          {
            key: 2, sexo: 'Masculino'
          },
          {
            key: 3, sexo: 'Feminino'
          },
          

        ],
        limite:0,
        estudante: false,

        
       
      };
      this.testeAlert = this.testeAlert.bind(this)

    }

    //Função que irar mostrar os dados que foram colocados no forumlario, e também um alert se caso os campos estiver vazio
    testeAlert(){
      
      if(this.state.nome === '' || this.state.idade === ''){
        alert('Campos vazio !! Favor colocar as informações')
        return
      }
       alert('Conta criada com Sucesso!! \n\n' +
                             ' Seu nome é: ' + this.state.nome + '\n' +
                             ' Sua idade é: '+ this.state.idade +  '\n' +
                             ' Sexo: ' + this.state.sexos[this.state.sexo].sexo + '\n' +
                             ' Seu Limite é: R$ ' + this.state.limite.toFixed(2) + '\n' +
                             ' Estudante: ' + ((this.state.estudante) ? 'Sim' : 'Não')   )
    }


    



  render(){


    let sexoItem = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexo} />    
    } )

    return(
      <View style={styles.container}>

        <Text style={styles.logo}>BancoEdX</Text>

        <View style={styles.containerInfo}>
        <TextInput onChangeText={ (name) => this.setState({nome: name})} style={styles.input} placeholder='INFORME SEU NOME'></TextInput>
        <TextInput onChangeText={ (numeroIdade) => this.setState({idade: numeroIdade})} style={styles.input} placeholder='INFORME SUA IDADE'></TextInput>

        
        <Text style={styles.textoC}>Sexo: {this.state.sexos[this.state.sexo].sexo} </Text>
        <Picker style={{width: 160, height: 30}}
         selectedValue={this.state.sexo}
         onValueChange={(sexoValue) => this.setState( {sexo: sexoValue} )}
         
         >
         {sexoItem}
          
        </Picker>

        <Text style={styles.textoC}>Seu Limite: R$ {this.state.limite.toFixed(2)} </Text>
        <Slider style={{width: 300, marginTop: 20}}
          minimumValue={0}
          maximumValue={100}
          onValueChange={(limiteSelecionado)  => this.setState({limite: limiteSelecionado})}
          />

        
        <Text style={styles.textoC}>Estudante:  {(this.state.estudante) ? "Sim" : "Não"} </Text>
        <Switch
        value={this.state.estudante}
        onValueChange={ (eEstudante) => this.setState({estudante: eEstudante})}
        thumbColor="orange"
         
        />

      
          

         <TouchableOpacity style={styles.btnArea} onPress={this.testeAlert}>
           <View style={styles.btn}>
             <Text style={styles.nameBtn}>Abrir Conta</Text>
           </View>
         </TouchableOpacity>

        </View>
        
        <Text style={styles.quem}>Desenvolvido por : Edmundo Roberto</Text>

        
       
       
        
      
        
      </View>

     
    )
  }
}


const styles = StyleSheet.create({
   container:{
     flex: 1,
     marginTop: 30,
     alignItems: 'center',
     backgroundColor: 'orange',
    },
    logo:{
      fontSize:30,
      marginTop: 20,
      color: '#1a1a1a',

    },
    containerInfo:{
      backgroundColor: '#fff',
      width: 370,
      height: 590,
      marginTop: 15,
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 10,
    },
    input:{
      height: 50,
      width: 330,
      borderWidth: 2,
      borderColor: 'orange',
      margin: 15,
      padding: 10,
      borderRadius: 10,

    },
    textoC:{
      fontSize: 25,
      color: 'orange',
      marginTop: 30,
    },
    btnArea:{
      width: 330,
      height: 60,
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 10,
      marginTop:20,
      
    },
    btn:{
     flex: 1,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center'

    },
    nameBtn:{
      color: 'orange',
      fontSize: 25,
      
    },
    quem:{
      color: '#2F4F4F',
      fontSize: 20,
      marginTop: 30,

    }

    

   
   

  })




