
import {createStackNavigator} from '@react-navigation/stack'
import Comments from '../../nestedScreens/CommentsScreen/Comments'
import DefaultScreenPosts from '../../nestedScreens/DefaultScreenPosts/DefaultScreenPosts'
import Map from '../../nestedScreens/MapScreen/Map'


const NestedScreen = createStackNavigator()
const Home = () => {
return(<NestedScreen.Navigator>
  <NestedScreen.Screen name='DefaultScreenPosts' options={{ headerShown: false }} component={DefaultScreenPosts}/>
  <NestedScreen.Screen name='Comments' options={{ headerShown: false }} component={Comments}/>
  <NestedScreen.Screen name='Map' options={{ headerShown: false }} component={Map}/>
  
  </NestedScreen.Navigator>)

}
export default Home