import React, {useState, useRef} from 'react';
import {
  View, 
  SafeAreaView, 
  ScrollView, 
  FlatList, 
  useWindowDimensions, 
  Animated, 
  Text,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


import ScrollBar from '../../components/ScroolBar/ScrollBar';
import SlideOne from '../../components/SlideOne/SlideOne';
import SlideTwo from '../../components/SlideTwo/SlideTwo';
import SlideThree from '../../components/SlideThree/SlideThree';
import SlideFour from '../../components/SlideFour/SlideFour';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

import globalStyles from '../../assets/style/globalStyle';
import style from './style';

// FADE IN AND OUT ANIMATION FUNCTION
//   const FadeInScrollView = () => {
//   const scrollY = new Animated.Value(0);
//   const opacity = scrollY.interpolate({
//     inputRange: [0, 200], // Adjust this range as needed
//     outputRange: [1, 100],   // Adjust opacity values (1 for fully visible, 0 for invisible)
//     extrapolate: 'clamp',  // Ensures the opacity doesn't go beyond the defined range
//   });
// }




const Presentation = ({item}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState('horizontal');
  const [snapDirection, setSnapDirection] = useState('left');
  const {width} = useWindowDimensions();

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  //TABVIEW SLIDESHOW
  
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first',},
    {key: 'second',},
    {key: 'third',},
    {key: 'fourth',},
  ]);

    const renderScene = ({route}) => {
      switch (route.key) {
        case 'first':
          return <SlideOne />;
        case 'second':
          return <SlideTwo />;
        case 'third':
          return <SlideThree />;
        case 'fourth':
          return <SlideFour />;
        default:
          return null;
      }
    };
  //TABVIEW ENDS

  const slides = [
    {
      id: 0,
      component: <SlideOne />,
      secondComponent: (
        <Banner
          title="Transforma tu celular en una poderosa terminal de pago"
          subTitle="Mantén el control total de una sola app"
        />
      ),
    },
    {
    id: 1,
      component: <SlideTwo />,
      secondComponent: (
        <Banner
          title="No dejes que los detalles de tus ventas se te escapen"
          subTitle="Mantén el control total de una sola app"
        />
      ),
    },
    {
      id: 2,
      component: <SlideThree />,
      secondComponent: (
        <Banner
          title="Tu negocio creciendo al máximo"
          subTitle="Alcanza el nivel de facturación ilimitado"
        />
      ),
    },
    {
      id: 3,
      component: <SlideFour />,
      secondComponent: (
        <Banner
          title="Una cuenta incluida"
          midLine="Recibe tus cobros y envía dinera desde"
          subTitle="una sola cuenta"
        />
      ),
    },
  ];

	return (
    <GestureHandlerRootView>
      <SafeAreaView style={globalStyles.backgroundWhite}>
        <View style={globalStyles.backgroundTop}></View>
        <ScrollView style={globalStyles.height}>
          <View style={{width:'90%', alignItems:'center', justifyContent:'center', marginLeft: '5%'}}>
            <ScrollBar data={slides} scrollX={scrollX} />
          </View>
          <View style={[style.presentationContainer]}>
            <View style={{flex: 1}}>
              {/* TABVIEW STARTS */}
              {/* <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width}}
                renderTabBar={props => (
                  <TabBar
                    {...props}
                    indicatorStyle={{backgroundColor: '#8a8a8a'}}
                    style={{backgroundColor: '#d9d9d9'}}
                  />
                )}
              /> */}
              {/* TABVIEW ENDS */}
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={slides}
                renderItem={({item}) => item.component}
                keyExtractor={item => item.id}
                horizontal={true}
                pagingEnabled
                bounces={false}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: false},
                )}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
              />
              {/* <Carousel
                loop={false}
                width={width}
                height={600}
                autoPlay={false}
                data={slides}
                scrollAnimationDuration={1000}
                // onSnapToItem={index => console.log('current index:', index)}
                renderItem={({item}) => (
                  <>
                    <View>{item.component}</View>
                    {/* <View>{item.banner}</View> */}
              {/* <Animated.View onScroll={() => FadeInScrollView()}>
                      <View>{item.banner}</View>
                    </Animated.View>
                  </>
                )} */}
              {/* modeConfig={snapDirection}
                mode={mode}
              />  */}
            </View>
            <View style={style.footer}>
              <Footer />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default Presentation;	