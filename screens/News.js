import React, { Component } from "react";
import {View,Text,Image,ScrollView,Linking,TouchableOpacity,StyleSheet} from "react-native";
import axios from "axios";
import { Card, Title, Paragraph } from "react-native-paper";

import { Entypo } from "react-native-vector-icons";

export default class News extends Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null,
  };
  getArticles() {
    axios
      .get("https://www.publico.pt/api/list/incendios")
      .then((response) =>
        response.data.map((article) => ({
          date: `${article.data}`,
          title: `${article.titulo}`,
          url: `${article.url}`,
          description: `${article.descricao}`,
          urlToImage: `${article.multimediaPrincipal}`,
        }))
      )
      .then((articles) => {
        this.setState({
          articles,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.getArticles();
  }
  render() {
    const { isLoading, articles } = this.state;
    return (
      <View>
        <ScrollView>
          <View style={styles.Buttons}>
            <View style={styles.Line} />   
          </View>
          {!isLoading ? (
            articles.map((article) => {
              const { date, title, url, description, urlToImage } = article;
              return (
                <Card
                  key={url}
                  style={{
                    borderColor: "#000000",
                    borderRadius: 5,
                    borderBottomWidth: 1,
                    backgroundColor: "#cbf5d6",
                  }}
                  onPress={() => {
                    Linking.openURL(`${url}`);
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    {/*text*/}
                    <View
                      style={{
                        justifyContent: "space-around",
                        flex: 2 / 3,
                        margin: 10,
                      }}
                    >
                      <Title>{title}</Title>
                    </View>
                    {/*image*/}
                    <View style={{ flex: 1 / 3, margin: 10 }}>
                      <Image
                        style={{ width: 120, height: 120 }}
                        source={{ uri: urlToImage }}
                      />
                    </View>
                  </View>
                  <View style={{ margin: 10 }}>
                    <Paragraph>{description}</Paragraph>
                    <Text style={{ fontWeight: "bold" }}>{/*date*/}</Text>
                  </View>
                </Card>
              );
            })
          ) : (
            <Text style={{ justifyContent: "center", alignItems: "center" }}>
              Loading
            </Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  Buttons: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignContent: 'space-between',
      alignSelf: 'center',
      textAlign: 'center'
      
    },

    ButtonsT: {
      flexDirection: 'row', 
      justifyContent: 'center',
      height: 30,
    },

  Line: {
      width: 75,
      height: 4,
      backgroundColor:'#808080',
      alignSelf:'center',
      marginVertical: 15,
      marginHorizontal: 50,
      borderRadius: 2,
    },

    Buttons: {
      flexDirection: 'row', 
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      textAlign: 'center'
      
    },

  })
