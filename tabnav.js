const bottomTabNavigator = createBottomTabNavigator(
    {
      Home: HomeScreen,
      Explore: ExploreScreen,
    },
    {
      initialRouteName: 'Home'
    }
  );

  export default bottomTabNavigator;