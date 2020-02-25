import{
    stackNavigator
} from 'reac-navigator';
const drawerNavigator = stackNavigator({
    drawerNavigator: {screen: drawerScreen}

},{
    headerMode: 'float',
    navigationOptions:({navigation})=>({

    },
    title: 'Home',
    headerTinColor: 'white',
    headerleft: <view>
        <TouchableHightlight 
        onPress={()=>{
            navigation.navigate('drawerOpen'):
}}>
    <text>menu</text>
    </TouchableHightlight>
    </view>
})

})