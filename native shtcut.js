*<Image style={styles.image} source={require('./test.jpeg')} /> //normal
*<Image style={styles.image}  source={{ uri:  route.params.item.urlToImage}} ></Image> //param()
*style={{...styles.cardTxt, fontFamily: baseFont}}> //spread,update style
*image: require('../../assets/hotel.jpg') // map a image
<Image style={styles.image} source={items.image}/> //after map
*<TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Content',{item:data})}>
//pass param
*<Image style={styles.image}  source={{ uri:  route.params.item.urlToImage}} ></Image> //after param {route}
* <Image style={styles.image} source={route.params.item.image}  ></Image>
*navigation.navigate('billPreview', { image })

yarn remove 'package


shif+alt+f
ctrl+x
rafce
