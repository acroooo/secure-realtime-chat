import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#F473B9',
    
      },
      image: {
        width: 40,
        height: 40,
        borderRadius: 10,
        marginRight: 10,
      },
      badgeContainer: {
        backgroundColor: '#0E3EDA',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        top: 5,
        borderWidth: 1,
        borderColor: 'white',
        fontSize:11,
        },
      badgeText: {
        color: 'white',
      },
      containerR: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 6,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      name: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 2,
        color: '#0E3EDA',
      },
      hour: {
        fontWeight: 'bold',
        fontSize: 11,
        color: '#FFDDEE',
      },
      text: {
        color: '#FFDDEE',
    
      },  
})

export default styles;