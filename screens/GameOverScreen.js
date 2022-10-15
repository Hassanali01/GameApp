import { View, Text, StyleSheet, Image} from "react-native";
import Heading from "../components/Heading";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";
function GameOverScreen({roundsNumber,userNumber,onGameOver}) {
    return(
        <View style={styles.rootContainer}>
            <Heading>Game Over</Heading>
            <View >
            <Image style={[styles.imageStyle,styles.imageContainer]} source={require('../assets/success.png')}/>
            </View>
            <Text style={styles.textContainer}>
                Your phone needed <Text style={styles.texthighlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.texthighlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onGameOver}>Start New Game</PrimaryButton>

        </View>
    )
    
}
export default GameOverScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:24

    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:2,
        borderColor:'black',
        margin:36,
        overflow:'hidden'
        
    },
    imageStyle:{
        width:'100%',
        height:'100%'
    },
    textContainer:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginVertical:20
    },
    texthighlight:{
     fontFamily:'open-sans-bold' ,
     color:Colors.primary500  
    }
})