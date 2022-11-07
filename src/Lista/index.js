import React, {Component} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

class Lista extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        };
    }

    render(){
        return(
        <View style={styles.areaFeed}>
            <View style={styles.viewPerfil}>
                <Image
                source={{uri:this.state.feed.imgperfil}}
                style={styles.fotoPerfil}
                />
                <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
            </View>
            <Image
                source={{uri: this.state.feed.imgPublicacao}}
                style={styles.fotoFeed}
            />

            <View style={styles.areaBtn}>
            <TouchableOpacity>
                <Image
                resizeMode="cover"
                source={require('../img/like.png')}
                style={styles.iconeLike}
            />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSend}>
                <Image
                resizeMode="cover"
                source={require('../img/send.png')}
                style={styles.iconeLike}
            />
            </TouchableOpacity>
            </View>

            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}>
                    {this.state.feed.nome}
                </Text>
                <Text style={styles.descRodape}>
                    {this.state.feed.descricao}
                </Text>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed:{
        flex: 1
    },
    nomeUsuario:{
        fontSize: 22,
        textAlign: 'left',
        color: '#000'
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25
    },
    fotoFeed: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    viewPerfil:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    iconeLike:{
        width: 30,
        height: 30
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5
    },
    btnSend:{
        paddingLeft: 10
    },
    viewRodape:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    descRodape:{
        paddingLeft: 5,
        fontSize: 15,
        color: "#000"
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    }
});

export default Lista;