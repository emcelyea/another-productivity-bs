import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';

import Home from './views/home';
import ToDo from './views/todo';
import Daily from './views/daily';
import Stats from './views/stats';

const views = [
  { component: Home, name: 'home', title: 'Home'},
  { component: Daily, name: 'daily', title: 'Daily' },
  { component: ToDo, name: 'todo', title: 'To-Do' },
  { component: Stats, name: 'stats', title: 'Stats'}
];

const Footer = ({setView}) => {
  return (
    <React.Fragment>
      {views.map(v => 
        <Button
          key={v.name}
          title={v.title}
          onPress={() => setView(v.name)}
        />)
      }
    </React.Fragment>
   )
}

const App = () => {
  const [view, setView] = React.useState('home');
  const CurrentView = views.find(v => v.name === view).component;
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <View
        style={styles.content}>
        <View style={styles.body}>
          <CurrentView />
        </View>
        <View style={styles.footer}>
          <Footer setView={setView}/>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 24
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#eee',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    left: 0,
    paddingVertical: 8,
    position: 'absolute',
    right: 0
  },
});

export default App;
