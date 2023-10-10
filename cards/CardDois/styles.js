import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        height:'60%',
        width: '60%',
        backgroundColor: '#FEE5E0',
        borderRadius: '15px',
        alignItems: 'center',
    }, 
    titulo1: {
        width: '100%',
        borderRadius: '15px',
        height: '25px',
        //alignItems: 'center',
        justifyContent: 'center'
    },
    texto1: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: '10px',
        alignSelf: 'center',
    }, 
    imagem: {
        height: '40%',
        width:'80%',
        alignSelf: 'center',
        borderRadius: '15px'
    }, 
    texto2: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: '14px',
        marginTop: '5px'
    },
    descricao: {
        width:'80%',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: '12px',
        textAlign: 'justify',
        marginTop: '5px'
    },
    button: {
        height:'40px',
        width: '80%',
        marginTop: '10px',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#F28482',
        borderRadius: '20px'
    },
    txtbutton: {
        fontFamily: 'Poppins',
        fontWeight: '650',
        fontSize: '12px',
    }
})

export default styles;