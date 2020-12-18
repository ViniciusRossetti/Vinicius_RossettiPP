import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import { Picker } from 'react-native';

export function Home({navigation}) {
    const[valor,setValor]= React.useState(0.00);
    const[picker,setPicker]=React.useState(0);

    function converter(){

        var calculo;
        var unidade;
        
        if (picker=="comp") {
            calculo = (valor/100);
            unidade = calculo.toString() + " metros";
        }else{
            if (picker=="massa") {
                calculo = (valor/1000);
                unidade = calculo.toString() + " quilogramas";
            }else{
                if (picker=="vol") {
                    calculo = (valor*0.000001);
                    unidade = calculo.toString() + " metros cúbicos";
                }else{
                    if (picker=="temp") {
                        calculo = ( ((valor * 9) / 5) + 32);
                        unidade = calculo.toString()+ " graus Fahrenheit";
                    }else{
                        calculo = (0);
                        unidade = calculo.toString() + " Incalculado";
                    }
                }
            }
        }
        setValor(calculo);
        
        if (picker != 'NENHUM') {
            navigation.navigate('Resultado',{unidade});
        }
        
        
    }

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titulo}>CONVERSOR DE MEDIDAS!</Text>
            <StatusBar style="auto" />
        </View>

        <View style={styles.viewInput}>
            <TextInput keyboardType="numeric" placeholder="Quantidade" style={styles.input} onChangeText={texto => setValor(texto)} value={valor} />

            <Picker
                selectedValue={picker}
                style={{height: 50, width: 159 , color:'#000', backgroundColor: '#000'}}
                onValueChange={selected => setPicker(selected)}
                value={picker}>
                <Picker.Item label="Unidade" value="NENHUM" />
                <Picker.Item label="Comprimento(cm -> m)" value="comp" />
                <Picker.Item label="Massa(g -> kg)" value="massa" />
                <Picker.Item label="Volume(cm³ -> m³)" value="vol" />
                <Picker.Item label="Temperatura(°C -> °F)" value="temp" />
            </Picker>
        </View>


        <View>
            <Button title="Calcular" color="#000" onPress={() => converter()}/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 45,
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
  input:{ 
    height: 50,
    width: '70%',
    borderWidth: 2,
    fontSize:20,
    color:"#c2c2c2",
    paddingLeft:10,
    marginLeft:20,
  },
  viewInput:{
    alignSelf:'center',
  },
  botao: {
    backgroundColor: '#000',
    height: 25,
    width: 100,
  },
  texto:{
    alignSelf: 'center',
    fontSize:20,
    color:'#fff',
  },
});