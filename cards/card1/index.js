import * as React from 'react';
import { View, Text} from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles'

export default function card1(){
    return(
        <View style={styles.container}>
            <View style={styles.containerBckgrd}>
                <View style={styles.contCard}>
                    <View style={styles.contTitulo}>
                        <Text style={styles.titulo}>
                        Mestre dos Magos
                        </Text>
                    </View>
                    <View style={styles.imgcard}>
                
                    </View>
                </View>
                
            </View>
        </View>
    )
}