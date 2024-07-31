import { _View, Image, StyleSheet, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar';


import { icons } from '../../constants';
//import { Loader } from '../../components';
//import { useGlobalcontext } from '../../context/GlobalProvider';

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View style={styles.tabBar}>
            <Image 
            source={icon}
            resizeMode='contain'
            tintColor={color}
            style={{
                width: 6,
                height: 6   
            }}
            />
            <Text
            className={`${focused} ? "font-psemibold" : "font-pregular"`}
            style={{color: color, fontSize: 'text-xs'}}
            >
                {name}
            </Text>
        </View>
    )
}


const TabsLayout = () => {
//    const { loading, isLogged } = useGlobalcontext();

//    if(!loading && isLogged ) return <Redirect href="/SignIn" />

  return (
    <>
     <Tabs
        screenOptions={{
            tabBarShowLabel: false,  
            tabBarActiveTintColor: "#6C15A2D9",
            tabBarInactiveTintColor: "#000000",
            tabBarStyle: {
                backgroundColor: "#615A5180",
                borderTopWidth: 1,
                boderTopColor: "#232533",
                height: 84,
                borderRadius: 13
            }
        }}
     >
    <Tabs.Screen
     name="home" 
     options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
            <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
            />
        ),
    }} 
    />
    <Tabs.Screen
    name="search" 
    options={{
       title: "Search",
       headerShown: false,
       tabBarIcon: ({ color, focused }) => (
           <TabIcon 
               icon={icons.search}
               color={color}
               name="Browse"
               focused={focused}
           />
       ),
   }} 
   />
   <Tabs.Screen
   name="browse" 
   options={{
      title: "Browse",
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
          <TabIcon 
              icon={icons.browse}
              color={color}
              name="Browse"
              focused={focused}
          />
      ),
  }} 
  />
  <Tabs.Screen
  name="profile" 
  options={{
     title: "Profile",
     headerShown: false,
     tabBarIcon: ({ color, focused }) => (
         <TabIcon 
             icon={icons.profile}
             color={color}
             name="Profile"
             focused={focused}
         />
     ),
 }} 
 />
   </Tabs>


    /
    
    <StatusBar backgroundColor="#161622" style="Light" />
   </>
  )
}

export default TabsLayout


const styles = StyleSheet.create({
    tabBar: {
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        gap: 2
    }
})