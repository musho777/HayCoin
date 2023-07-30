import { Dimensions, StyleSheet, View, useWindowDimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedRef,
} from 'react-native-reanimated';
import Pagination from './Pagination';
import CustomImage from './CustomImage';
import { Text, Image, dima } from 'react-native'
import { Styles } from '../../../Styles/Styles';
import { Button } from '../Button/Button';
const windowWidth = Dimensions.get('window').width;
const CustomImageCarousal = ({ data, autoPlay, pagination }) => {
    const scrollViewRef = useAnimatedRef(null);
    const interval = useRef();
    const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
    const [showFakeImg, setShowFakeImg] = useState(true)

    const [newData, setNewData] = useState([
        { key: 'spacer-left' },
        ...data,
        { key: 'spacer-right' },
    ]);
    const { width } = useWindowDimensions();
    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const offSet = useSharedValue(0);

    useEffect(() => {
        setNewData([{ key: 'spacer-left' }, ...data, { key: 'spacer-right' }]);
    }, [data]);

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
        onMomentumEnd: e => {
            offSet.value = e.contentOffset.x;
        },
    });
    const next = () => {
        let _offSet = offSet.value;
        if (_offSet >= Math.floor(SIZE * (data.length - 2) - 10)) {
        } else {
            _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef.current.scrollTo({ x: _offSet, y: 0 });
    }
    return (
        <View style={{ height: '99%' }}>
            <View>
                {showFakeImg && <View style={styles.fakeImage}>
                    <Image resizeMode='repeat' style={{ width: '100%', height: '100%' }} source={require('../../../assets/img/photo-1536063211352-0b94219f6212.jpeg')} />
                </View>}
                <Animated.ScrollView
                    ref={scrollViewRef}
                    onScroll={onScroll}
                    onScrollBeginDrag={e => {
                        setIsAutoPlay(false);
                    }}
                    onMomentumScrollEnd={() => {
                        setIsAutoPlay(autoPlay);
                    }}
                    scrollEventThrottle={16}
                    decelerationRate="fast"
                    snapToInterval={SIZE}
                    horizontal
                    bounces={false}
                    scrollEnabled={false}
                    // contentOffset={{ x: SIZE, y: 0 }}
                    showsHorizontalScrollIndicator={false}>
                    {newData.map((item, index) => {
                        return (
                            <CustomImage
                                key={index}
                                index={index}
                                item={item}
                                x={x}
                                size={SIZE}
                                spacer={SPACER}
                            />
                        );
                    })}
                </Animated.ScrollView>
            </View>
            <View style={{ paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>Algorithm</Text>
                <Text style={[Styles.nevayRegular, { marginBottom: 20 }]}>Users going through a vetting process to ensure you never match with bots.</Text>
            </View>
            {pagination && <Pagination data={data} x={x} size={SIZE} />}
            <View style={Styles.buttonWrapper}>
                <Button onPress={() => {
                    setShowFakeImg(false)
                    next()
                }
                } title={'Create an account'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fakeImage: {
        width: (windowWidth),
        height: (windowWidth * 0.85),
        position: 'absolute',
        top: 43,
        left: -397,
        borderRadius: 34,
        overflow: 'hidden',
    },
    title: {
        ...Styles.redBold,
        fontSize: 24,
        marginVertical: 15
    }
})

export default CustomImageCarousal;
