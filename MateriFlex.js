import React,{Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import Posts from './posts.svg'


class MateriFlex extends Component {
    render(){
        return (
            <View>
                {/* <View style={{flexDirection:'row', justifyContent:''}}>
                    <View style={{backgroundColor: '#ee5253', flex:1, height:50}}/>
                    <View style={{backgroundColor: '#feca57', flex:1, height:50}}/>
                    <View style={{backgroundColor: '#1dd1a1', flex:1, height:50}}/>
                    <View style={{backgroundColor: '#5f27cd', flex:1, height:50}}/>
                </View> */}
                <View style={{flexDirection:"row", alignItems: "center"}}>
                    <Image source={{uri: 'https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-19/s150x150/139719442_166359161564768_6977612018194294190_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=1XEw2XMdLagAX-ymIz5&tp=1&oh=07231cd4e5fa46940c9fe00d9f22121e&oe=60347FB8'}}
                    style={{width: 80, height:80, borderRadius:50, margin: 10}} />
                    <View style={{flex:1}}>
                        <Text style={{textAlign:"center"}}>53</Text>
                        <Text style={{fontWeight: "bold", textAlign:"center"}}>Postingan</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{textAlign:"center"}}>2021</Text>
                        <Text style={{fontWeight: "bold", textAlign:"center"}}>Pengikut</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{textAlign:"center"}}>1076</Text>
                        <Text style={{fontWeight: "bold", textAlign:"center"}}>Pengikut</Text>
                    </View>
                </View>
                <View style={{marginLeft:10}}>
                    <Text style={{fontWeight:'bold'}}>Aldi Gunawan</Text>
                    <Text style={{color:'#3e3e3e'}}>Sains, Teknologi & Teknik</Text>
                    <Text style={{color:'#1c4966'}}>💍@silviaisti12</Text>
                    <Text style={{color:'#1c4966'}}>Tangerang Selatan {"\n"}PC IPNU Tangsel{"\n"}Sistem Komputer
                    {"\n"}Belajar - Berjuang - Bertaqwa</Text>
                </View>
                <View style={{flexDirection:"column", marginTop:10}}>
                    <View style={{borderWidth: 1, marginHorizontal:10, borderRadius: 5, borderColor:'#dddddd', height:35, flex:1, justifyContent: "center"}}>
                        <Text style={{textAlign:"center"}}>Edit Profil</Text>
                    </View>
                    <View style={{flexDirection:'row', marginStart:10, marginEnd:10}}>
                        <View style={{borderWidth: 1, marginEnd:5, marginTop:5, borderRadius: 5, borderColor:'#dddddd', height:35, flex:1, justifyContent: "center"}}>
                            <Text style={{textAlign:"center"}}>Promosi</Text>
                        </View>
                        <View style={{borderWidth: 1, marginEnd:5, marginTop:5, borderRadius: 5, borderColor:'#dddddd', height:35, flex:1, justifyContent: "center"}}>
                            <Text style={{textAlign:"center"}}>Insight</Text>
                        </View>
                        <View style={{borderWidth: 1, marginTop:5, borderRadius: 5, borderColor:'#dddddd', height:35, flex:1, justifyContent: "center"}}>
                            <Text style={{textAlign:"center"}}>Kontak</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{borderColor:'#dddddd', borderRadius: 50, borderWidth:2, height:70, width:70, marginTop:10, marginHorizontal:10}}></View>
                        <View style={{borderColor:'#dddddd', borderRadius: 50, borderWidth:2, height:70, width:70, marginTop:10, marginHorizontal:10}}></View>
                        <View style={{borderColor:'#dddddd', borderRadius: 50, borderWidth:2, height:70, width:70, marginTop:10, marginHorizontal:10}}></View>
                        <View style={{borderColor:'#dddddd', borderRadius: 50, borderWidth:2, height:70, width:70, marginTop:10, marginHorizontal:10}}></View>
                        <View style={{borderColor:'#dddddd', borderRadius: 50, borderWidth:2, height:70, width:70, marginTop:10, marginHorizontal:10}}></View>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <ScrollView>
                    <View style={{flexDirection:'row', marginTop:10}}>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                    <View style={{backgroundColor:'#3e3e3e', height:133, borderColor: '#111111', borderWidth: 1, flex:1}}></View>
                </View>
                    </ScrollView>
                </View>
            </View>

        );
    }
}

export default MateriFlex;