import React from "react";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { FlatList, StatusBar } from "react-native";
import { View, Image, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#52A77E", white: "#FFFFFF" };

const slides = [
    {
        id: "1",
        image: require("../assets/tutorial1.png"),
        title: "Protege o ambiente",
        subtitle:
        <Text>
        Cria 🟡 alertas para sinalizar zonas vulneráveis{"\n"} Cria 🟢 eventos
        para atuar no terreno ou organizar encontros.
      </Text>
    },
    {
        id: "2",
        image: require("../assets/tutorial2.png"),
        title: "A comunidade é a nossa alma",
        subtitle: <Text>Coopera com  outros utilizadores e trabalha no terreno. </Text>,
    },
    {
        id: "3",
        image: require("../assets/tutorial3.png"),
        title: "Consulta Informação",
        subtitle: <Text>Fica atualizado notícias, regulamentos, leis e muito mais.</Text>,
    },
];

const Slide = ({ item }) => {
    return (
        <View style={{ alignItems: "center", width:width }}>
            <Image
                source={item.image}
                style={{ height: height/4, width: 300, resizeMode: "contain", marginTop: 150}}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
};

const TutorialScreen = ({ navigation }) => {
    const [currentSlideIndex, setcurrentSlideIndex] = React.useState(0);
    const ref = React.useRef(null);
    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginTop: 20,
                    }}
                >
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.white,
                                    width: 25,
                                },
                            ]}
                        />
                    ))}
                </View>
                <View style={{ marginBottom: 20 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View style={{ height: 50 }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.replace("Landing")}
                            >
                                <Text
                                    style={{ fontWeight: "bold", fontSize: 15, color: "#52A77E" }}
                                >
                                    ENTRAR
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() => navigation.replace("Landing")}
                                style={[
                                    styles.btn,
                                    {
                                        backgroundColor: "transparent",
                                        borderWidth: 1,
                                        borderColor: "white",
                                    },
                                ]}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 15,
                                        color: COLORS.white,
                                    }}
                                >
                                    SALTAR
                                </Text>
                            </TouchableOpacity>
                            <View style={{ width: 15 }} />
                            <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                                <Text
                                    style={{ fontWeight: "bold", fontSize: 15, color: "#52A77E" }}
                                >
                                    PRÓXIMO
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };
    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setcurrentSlideIndex(currentIndex);
    };
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setcurrentSlideIndex(nextSlideIndex);
        }
    };
    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setcurrentSlideIndex(lastSlideIndex);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar backgroundColor={COLORS.primary} />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled
                data={slides}
                contentContainerStyle={{ height: height * 0.75 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
       
    },
    subtitle: {
        color: COLORS.white,
        fontSize: 15,
        marginTop: 10,
        maxWidth: "90%",
        textAlign: "center",
        lineHeight: 23,
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: "#808080",
        marginHorizontal: 3,
        borderRadius: 2,
        marginTop: 20,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default TutorialScreen;
