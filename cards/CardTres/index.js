import * as React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles'


export default function CardTres(){
    return(
        <View style={styles.container}>
            <View style={styles.card}> 
                <View style={styles.titulo1}>
                    <Text style={styles.texto1}> Card 3</Text>
                </View>

                <Image source={require('../../assets/mestremagos.png')} style={styles.imagem}></Image>
                <Text style={styles.texto2}> ⚜ Mestre dos Magos ⚜ </Text>
                <Text style={styles.descricao}>
                    Esta carta permite que o jogador se ausente da rodada enquanto está sendo atacado por forças inimigas. Kabum!
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txtbutton}>Trocar carta</Text>
                </TouchableOpacity>
                <Link to={{ screen: 'CardUm' }} style={styles.link}>
      Próxima carta →
    </Link>
            </View>
        </View>
    )
}