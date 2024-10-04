import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Switch, Text, View, Button } from 'react-native';

export default function App() {
  const [temaSelecionado, setTemaSelecionado] = useState(0)
  const [tema, setTema] = useState ([
    { key: 1, nome:'Automático' },
    { key: 2, nome:'Claro' },
    { key: 3, nome:'Escuro' },
  ])

  const [value, setValue] = useState(16)
  const [isOn, setIsOn] = useState(false)



  let temaItem = tema.map((value, key) => {
    return(
      <Picker.item
        key={key}
        value={key}
        label={value.nome}
      />
    )
  })


  return (
    <View>
      <Text style={ styles.tituloPrincipal}>
        Configurações de Preferências
      </Text> 

      {/* Aqui começa o picker */}
      <Text style={ styles.titulo}>
        Escolha o Tema
      </Text>
      <Picker
        selectedValue={temaSelecionado}
        onValueChange={(item) => setTemaSelecionado(item)}
      >
        {temaItem}
      </Picker>
      <Text style={{ fontSize: 24 }}>{'Tema escolhido: ' + tema[temaSelecionado].nome}</Text>
      
      
      {/* Aqui começa o Slider */}
      <Text style={styles.titulo}>Escolha o tamanho da fonte: </Text>
      <Slider
        minimunValue={12}
        maximumValue={30}
        value={value}
        onValueChange={ (value) => setValue(value)}
      />
      <Text style={{ fontSize: 24 }}>Fonte: {value.toFixed()}</Text>


      {/* Aqui começa o Switch */}
      <Text style={styles.titulo}>Modo Noturno: </Text>

      <Switch
        value={isOn}
        onValueChange={ (value) => setIsOn(value)}      
      />
      <Text style={{ fontSize: 24 }}>{isOn ? 'Ligado' : 'Desligado'}</Text>

    {/* Aqui começa o botão de reset */}
    <Button 
      title="Resetar"
    />
    </View>
  );
}

const styles = StyleSheet.create({
  tituloPrincipal: {
    fontSize: 24,
    marginTop: 50,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
  }
})